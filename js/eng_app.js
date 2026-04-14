/**
 * 英語教科書ビューア (eng_app.js)
 * セクション別PDFからの連番ページ画像を表示
 */
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const grade = urlParams.get('grade') || '2';
    const sectionId = urlParams.get('section') || 'prog1';
    const initialPage = parseInt(urlParams.get('page')) || 1;

    // Grade data
    const gradeData = engData[grade];
    if (!gradeData) {
        document.body.innerHTML = '<h1 style="color:#fff;text-align:center;padding:4rem;">学年データが見つかりません</h1>';
        return;
    }

    const TOTAL_PAGES = gradeData.totalPages;
    const IMAGE_DIR = gradeData.imageDir;
    const sections = gradeData.sections;

    // Find initial section
    const initialSection = sections.find(s => s.id === sectionId) || sections[0];
    let currentPage = initialSection.start + (initialPage - 1);
    if (currentPage < 1) currentPage = 1;
    if (currentPage > TOTAL_PAGES) currentPage = TOTAL_PAGES;

    // DOM refs
    const imgEl = document.getElementById('textbook-img');
    const imgRightEl = document.getElementById('textbook-img-right');
    const imageWrapper = document.getElementById('image-wrapper');
    const pageInd = document.getElementById('page-indicator');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const fsIcon = document.getElementById('fs-icon');
    const fsLabel = document.getElementById('fs-label');
    const viewerContainer = document.getElementById('viewer-container');
    const floatingNav = document.getElementById('floating-nav');
    const floatPrev = document.getElementById('float-prev');
    const floatNext = document.getElementById('float-next');
    const floatPage = document.getElementById('float-page');
    const floatExitFs = document.getElementById('float-exit-fs');
    const chapterTitle = document.getElementById('chapter-title');
    const backLink = document.getElementById('back-link');
    const qrBar = document.getElementById('qr-bar');
    const qrLink = document.getElementById('qr-link');
    const qrLinkLabel = document.getElementById('qr-link-label');

    const iframeModalOverlay = document.getElementById('iframe-modal-overlay');
    const iframeModalFrame = document.getElementById('iframe-modal-frame');
    const iframeModalClose = document.getElementById('iframe-modal-close');
    const iframeModalTitle = document.getElementById('iframe-modal-title');
    const iframeModal = document.querySelector('.iframe-modal');
    const iframeModalHeader = document.querySelector('.iframe-modal-header');
    const iframeModalResize = document.getElementById('iframe-modal-resize');

    // Set back link
    backLink.href = gradeData.tocPage;

    // View mode: 'viewer' or 'spread'
    let viewMode = 'viewer';
    let currentZoom = 1;

    // ===== Mode Tabs =====
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const newMode = tab.dataset.mode;
            if (newMode === viewMode) return;
            setViewMode(newMode);
        });
    });

    function setViewMode(mode) {
        viewMode = mode;
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        const activeTab = document.querySelector(`.mode-tab[data-mode="${mode}"]`);
        if (activeTab) activeTab.classList.add('active');

        viewerContainer.classList.remove('spread-mode');
        if (mode === 'spread') {
            viewerContainer.classList.add('spread-mode');
            btnFullscreen.style.display = 'inline-flex';
            floatingNav.style.display = 'block';
        } else {
            btnFullscreen.style.display = 'none';
            floatingNav.style.display = 'none';
            if (document.fullscreenElement) document.exitFullscreen();
        }

        loadPage(currentPage);
    }

    // ===== Zoom =====
    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        currentZoom = Math.min(3, currentZoom + 0.25);
        applyZoom();
    });
    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        currentZoom = Math.max(0.5, currentZoom - 0.25);
        applyZoom();
    });
    document.getElementById('btn-zoom-reset').addEventListener('click', () => {
        currentZoom = 1;
        applyZoom();
    });

    function applyZoom() {
        if (viewMode === 'spread') {
            imageWrapper.style.transform = `scale(${currentZoom})`;
            imgEl.style.transform = 'none';
            imgRightEl.style.transform = 'none';
        } else {
            imageWrapper.style.transform = 'none';
            imgEl.style.transform = `scale(${currentZoom})`;
        }
    }

    function getImageSrc(globalPage) {
        return `${IMAGE_DIR}/page_${globalPage.toString().padStart(4, '0')}.png`;
    }

    function getSectionForPage(p) {
        for (const s of sections) {
            if (p >= s.start && p <= s.end) return s;
        }
        return null;
    }

    function animatePageTurn(direction) {
        imageWrapper.classList.remove('page-turn-left', 'page-turn-right');
        void imageWrapper.offsetWidth;
        imageWrapper.classList.add(direction > 0 ? 'page-turn-left' : 'page-turn-right');
    }

    let isNavigating = false;

    function preloadImage(src) {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = src;
        });
    }

    function loadPage(pageNum, direction) {
        if (pageNum < 1) pageNum = 1;
        if (pageNum > TOTAL_PAGES) pageNum = TOTAL_PAGES;
        if (isNavigating) return;

        const imagesToPreload = [];
        let resolvedLeftPage = pageNum;

        if (viewMode === 'spread') {
            // 教科書ページ = グローバルページ + 1 のオフセットがあるため、
            // 奇数グローバル(=偶数教科書ページ)を左に配置して本の見開きを再現
            resolvedLeftPage = pageNum % 2 === 1 ? pageNum : pageNum - 1;
            if (resolvedLeftPage < 1) resolvedLeftPage = 1;
            imagesToPreload.push(getImageSrc(resolvedLeftPage));
            const rightPage = resolvedLeftPage + 1;
            if (rightPage <= TOTAL_PAGES) {
                imagesToPreload.push(getImageSrc(rightPage));
            }
        } else {
            imagesToPreload.push(getImageSrc(pageNum));
        }

        isNavigating = true;

        Promise.all(imagesToPreload.map(preloadImage)).then(() => {
            currentPage = viewMode === 'spread' ? resolvedLeftPage : pageNum;

            // URL update
            const sec = getSectionForPage(currentPage);
            const localPage = sec ? (currentPage - sec.start + 1) : currentPage;
            const secId = sec ? sec.id : sectionId;
            const newUrl = `${window.location.pathname}?grade=${grade}&section=${secId}&page=${localPage}`;
            window.history.replaceState(null, '', newUrl);

            // Reset zoom
            currentZoom = 1;
            imgEl.style.transform = 'scale(1)';
            imgRightEl.style.transform = 'scale(1)';
            imageWrapper.style.transform = 'none';

            if (direction !== undefined) animatePageTurn(direction);

            if (viewMode === 'spread') {
                imgEl.src = getImageSrc(resolvedLeftPage);
                const rightPage = resolvedLeftPage + 1;
                if (rightPage <= TOTAL_PAGES) {
                    imgRightEl.src = getImageSrc(rightPage);
                    imgRightEl.style.display = 'block';
                } else {
                    imgRightEl.style.display = 'none';
                }
                const label = `${currentPage}–${Math.min(rightPage, TOTAL_PAGES)} / ${TOTAL_PAGES}`;
                pageInd.textContent = label;
                floatPage.textContent = label;
            } else {
                imgEl.src = getImageSrc(currentPage);
                imgRightEl.style.display = 'none';
                pageInd.textContent = `${currentPage} / ${TOTAL_PAGES}`;
            }

            // Update title
            updateTitle(currentPage);

            // Update QR link bar
            updateQrBar(currentPage);

            imageWrapper.scrollTop = 0;
            isNavigating = false;
        });
    }

    function updateQrBar(p) {
        const sec = getSectionForPage(p);
        const pageQr = gradeData.pageQrs && gradeData.pageQrs[p];

        if (pageQr) {
            qrLink.dataset.url = pageQr;
            const isStep = pageQr.includes('_st');
            const suffix = isStep ? ' 音声・動画' : ' 音声・動画 (ページ専用)';
            qrLinkLabel.textContent = sec ? `${sec.title}${suffix}` : `音声・動画 (ページ専用)`;
            qrBar.style.display = 'block';
        } else if (sec && sec.qrUrl) {
            qrLink.dataset.url = sec.qrUrl;
            qrLinkLabel.textContent = `${sec.title} 音声・動画`;
            qrBar.style.display = 'block';
        } else {
            qrBar.style.display = 'none';
        }
    }

    // モーダルのドラッグ機構とサイズ変更 (マウス・タッチ両対応)
    let isDragging = false;
    let dragStartX = 0, dragStartY = 0;
    let currentTx = 0, currentTy = 0;

    function handleDragStart(e) {
        if (e.target.tagName.toLowerCase() === 'button') return;
        isDragging = true;
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        dragStartX = clientX - currentTx;
        dragStartY = clientY - currentTy;
        iframeModalFrame.style.pointerEvents = 'none'; // prevent iframe stealing mouse/touch
    }

    function handleDragMove(e) {
        if (!isDragging) return;
        // prevent background scrolling on touch devices
        if (e.type.includes('touch')) e.preventDefault(); 
        
        const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
        currentTx = clientX - dragStartX;
        currentTy = clientY - dragStartY;
        iframeModal.style.transform = `translate(${currentTx}px, ${currentTy}px)`;
    }

    function handleDragEnd() {
        if (isDragging) {
            isDragging = false;
            iframeModalFrame.style.pointerEvents = 'auto';
        }
    }

    iframeModalHeader.addEventListener('mousedown', handleDragStart);
    iframeModalHeader.addEventListener('touchstart', handleDragStart, { passive: false });

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('touchmove', handleDragMove, { passive: false });

    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchend', handleDragEnd);
    window.addEventListener('touchcancel', handleDragEnd);

    iframeModalResize.addEventListener('click', () => {
        iframeModal.classList.toggle('modal-half');
    });

    qrLink.addEventListener('click', (e) => {
        e.preventDefault();
        const url = qrLink.dataset.url;
        if (url) {
            iframeModalTitle.textContent = qrLinkLabel.textContent;
            iframeModalFrame.src = url;
            iframeModalOverlay.style.display = 'flex';
            // reset position and size when opened
            currentTx = 0;
            currentTy = 0;
            iframeModal.style.transform = `translate(0px, 0px)`;
            iframeModal.classList.remove('modal-half');
        }
    });

    iframeModalClose.addEventListener('click', () => {
        iframeModalOverlay.style.display = 'none';
        iframeModalFrame.src = '';
    });

    function updateTitle(p) {
        const sec = getSectionForPage(p);
        const localPage = sec ? (p - sec.start + 1) : p;
        if (sec) {
            chapterTitle.textContent = `${sec.title} (${localPage}/${sec.pages})`;
        } else {
            chapterTitle.textContent = `Page ${p}`;
        }
    }

    function goNext() { loadPage(currentPage + (viewMode === 'spread' ? 2 : 1), 1); }
    function goPrev() { loadPage(currentPage - (viewMode === 'spread' ? 2 : 1), -1); }

    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);
    floatPrev.addEventListener('click', goPrev);
    floatNext.addEventListener('click', goNext);

    // ===== Fullscreen =====
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                document.body.classList.add('fullscreen-mode');
                btnFullscreen.classList.add('active');
                fsIcon.textContent = '↩️';
                fsLabel.textContent = '戻る';
                floatExitFs.style.display = 'block';
            });
        } else {
            exitFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.fullscreenElement) document.exitFullscreen();
    }

    btnFullscreen.addEventListener('click', toggleFullscreen);
    floatExitFs.addEventListener('click', exitFullscreen);

    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            document.body.classList.remove('fullscreen-mode');
            btnFullscreen.classList.remove('active');
            fsIcon.textContent = '📺';
            fsLabel.textContent = '全画面';
            floatExitFs.style.display = 'none';
        }
    });

    // ===== Keyboard =====
    document.addEventListener('keydown', (e) => {
        if (document.activeElement && document.activeElement.id === 'page-jump-input') return;
        if (e.key === 'ArrowLeft') goPrev();
        else if (e.key === 'ArrowRight') goNext();
        else if ((e.key === 'f' || e.key === 'F') && viewMode === 'spread') toggleFullscreen();
        else if (e.key === 'Escape') closePageJump();
    });

    // ===== Touch Swipe =====
    let touchStartX = 0;
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    document.addEventListener('touchend', (e) => {
        const diff = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(diff) > 80) {
            if (diff > 0) goPrev();
            else goNext();
        }
    }, { passive: true });

    // ===== Page Jump Modal =====
    const jumpOverlay = document.getElementById('page-jump-overlay');
    const jumpInput = document.getElementById('page-jump-input');
    const jumpGo = document.getElementById('page-jump-go');
    const jumpClose = document.getElementById('page-jump-close');
    const jumpChapters = document.getElementById('page-jump-chapters');

    // Populate section buttons
    sections.forEach(sec => {
        const btn = document.createElement('button');
        btn.textContent = `${sec.title} (p.${sec.start})`;
        btn.dataset.page = sec.start;
        btn.addEventListener('click', () => {
            closePageJump();
            loadPage(parseInt(btn.dataset.page));
        });
        jumpChapters.appendChild(btn);
    });

    jumpInput.max = TOTAL_PAGES;
    jumpInput.placeholder = `1〜${TOTAL_PAGES}`;

    pageInd.addEventListener('click', () => {
        jumpOverlay.classList.add('active');
        jumpInput.value = currentPage;
        jumpInput.focus();
        jumpInput.select();
    });

    function doJump() {
        const p = parseInt(jumpInput.value);
        if (p >= 1 && p <= TOTAL_PAGES) {
            closePageJump();
            loadPage(p);
        }
    }

    jumpGo.addEventListener('click', doJump);
    jumpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doJump();
        if (e.key === 'Escape') closePageJump();
    });

    jumpClose.addEventListener('click', closePageJump);
    jumpOverlay.addEventListener('click', (e) => {
        if (e.target === jumpOverlay) closePageJump();
    });

    function closePageJump() {
        jumpOverlay.classList.remove('active');
    }

    // ===== Ctrl + Wheel Zoom =====
    const imagePaneEl = document.getElementById('image-pane');
    imagePaneEl.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
            if (e.deltaY < 0) currentZoom = Math.min(3, currentZoom + 0.1);
            else currentZoom = Math.max(0.5, currentZoom - 0.1);
            applyZoom();
        }
    }, { passive: false });

    // ===== Initial Load =====
    loadPage(currentPage);
});
