document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get('page')) || 12;
    
    const MIN_PAGE = 1;
    const MAX_PAGE = 280;

    // DOM refs
    const imgEl = document.getElementById('textbook-img');
    const imgRightEl = document.getElementById('textbook-img-right');
    const imageWrapper = document.getElementById('image-wrapper');
    const pageInd = document.getElementById('page-indicator');
    const explanationDiv = document.getElementById('explanation-container');
    const rightPane = document.getElementById('right-pane');
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

    // Chapter definitions — 中3数学（啓林館）
    const chapters = [
        { num: 1, title: '第1章 式の展開と因数分解', start: 12, end: 38 },
        { num: 2, title: '第2章 平方根', start: 40, end: 66 },
        { num: 3, title: '第3章 二次方程式', start: 68, end: 90 },
        { num: 4, title: '第4章 関数 y=ax²', start: 92, end: 120 },
        { num: 5, title: '第5章 図形と相似', start: 122, end: 160 },
        { num: 6, title: '第6章 円の性質', start: 162, end: 180 },
        { num: 7, title: '第7章 三平方の定理', start: 182, end: 202 },
        { num: 8, title: '第8章 標本調査とデータの活用', start: 204, end: 220 }
    ];

    function getChapterForPage(p) {
        for (const ch of chapters) {
            if (p >= ch.start && p <= ch.end) return ch;
        }
        return null;
    }

    // View modes: 'viewer', 'guide', 'spread'
    let viewMode = 'viewer';
    let currentZoom = 1;

    // Mode tabs
    document.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const newMode = tab.dataset.mode;
            if (newMode === viewMode) return;
            setViewMode(newMode);
        });
    });

    function setViewMode(mode) {
        viewMode = mode;

        // Update tab UI
        document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
        const activeTab = document.querySelector(`.mode-tab[data-mode="${mode}"]`);
        if (activeTab) activeTab.classList.add('active');

        // Update container classes
        viewerContainer.classList.remove('guide-mode', 'spread-mode');
        if (mode === 'guide') viewerContainer.classList.add('guide-mode');
        if (mode === 'spread') viewerContainer.classList.add('spread-mode');

        // Show/hide panels
        if (mode === 'viewer') {
            rightPane.style.display = 'none';
            btnFullscreen.style.display = 'none';
            floatingNav.style.display = 'none';
            if (document.fullscreenElement) document.exitFullscreen();
        } else if (mode === 'guide') {
            rightPane.style.display = 'block';
            btnFullscreen.style.display = 'none';
            floatingNav.style.display = 'none';
            if (document.fullscreenElement) document.exitFullscreen();
        } else if (mode === 'spread') {
            rightPane.style.display = 'none';
            btnFullscreen.style.display = 'inline-flex';
            floatingNav.style.display = 'block';
        }

        loadPage(currentPage);
    }

    // Zoom
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

    function getImageSrc(pageNum) {
        // PDFオフセット: PDFページ番号 = 教科書ページ番号 + 2
        const pdfPageNum = pageNum + 2;
        return `images/math_g3_keirinkan/page_${pdfPageNum.toString().padStart(4, '0')}.png`;
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
        if (pageNum < MIN_PAGE) pageNum = MIN_PAGE;
        if (pageNum > MAX_PAGE) pageNum = MAX_PAGE;

        if (isNavigating) return;

        const imagesToPreload = [];
        let resolvedLeftPage = pageNum;

        if (viewMode === 'spread') {
            resolvedLeftPage = pageNum % 2 === 0 ? pageNum : pageNum - 1;
            if (resolvedLeftPage < MIN_PAGE) resolvedLeftPage = MIN_PAGE;
            imagesToPreload.push(getImageSrc(resolvedLeftPage));
            const rightPage = resolvedLeftPage + 1;
            if (rightPage <= MAX_PAGE) {
                imagesToPreload.push(getImageSrc(rightPage));
            }
        } else {
            imagesToPreload.push(getImageSrc(pageNum));
        }

        isNavigating = true;

        Promise.all(imagesToPreload.map(preloadImage)).then(() => {
            currentPage = viewMode === 'spread' ? resolvedLeftPage : pageNum;

            // URL update
            const currentChapter = urlParams.get('chapter') || '1';
            const newUrl = window.location.protocol + "//" + window.location.host + 
                window.location.pathname + '?chapter=' + currentChapter + '&page=' + currentPage;
            window.history.pushState({ path: newUrl }, '', newUrl);

            // Reset zoom
            currentZoom = 1;
            imgEl.style.transform = 'scale(1)';
            imgRightEl.style.transform = 'scale(1)';
            imageWrapper.style.transform = 'none';

            if (direction !== undefined) animatePageTurn(direction);

            if (viewMode === 'spread') {
                imgEl.src = getImageSrc(resolvedLeftPage);
                const rightPage = resolvedLeftPage + 1;
                if (rightPage <= MAX_PAGE) {
                    imgRightEl.src = getImageSrc(rightPage);
                    imgRightEl.style.display = 'block';
                } else {
                    imgRightEl.style.display = 'none';
                }
                const label = `p.${resolvedLeftPage}–${Math.min(rightPage, MAX_PAGE)}`;
                pageInd.textContent = label;
                floatPage.textContent = label;
                updateChapterTitle(resolvedLeftPage);
            } else {
                imgEl.src = getImageSrc(currentPage);
                imgRightEl.style.display = 'none';
                pageInd.textContent = `p.${currentPage}`;

                // Clean up prev graphs
                if (window.GraphHelper) GraphHelper.cleanup();

                if (viewMode === 'guide') {
                    const data = (typeof guideData !== 'undefined') ? guideData[currentPage.toString()] : null;
                    if (data) {
                        explanationDiv.innerHTML = data.content;
                        chapterTitle.textContent = data.title;
                    } else {
                        updateChapterTitle(currentPage);
                        explanationDiv.innerHTML = `<div class="empty-state">このページの解説は準備中です。</div>`;
                    }

                    if (window.MathJax && window.MathJax.typesetPromise) {
                        MathJax.typesetPromise([explanationDiv]).then(() => {
                            if (data && data.onRender) {
                                try { data.onRender(); } catch(e) { console.warn('onRender error:', e); }
                            }
                        }).catch(e => console.log(e.message));
                    } else if (data && data.onRender) {
                        setTimeout(() => {
                            try { data.onRender(); } catch(e) { console.warn('onRender error:', e); }
                        }, 200);
                    }
                } else {
                    // Viewer mode — just update title
                    updateChapterTitle(currentPage);
                }
            }

            // scroll image to top
            imageWrapper.scrollTop = 0;

            isNavigating = false;
        });
    }

    function updateChapterTitle(p) {
        const ch = getChapterForPage(p);
        if (ch) {
            chapterTitle.textContent = `${ch.title} — p.${p}`;
        } else {
            chapterTitle.textContent = `p.${p}`;
        }
    }

    function goNext() { loadPage(currentPage + (viewMode === 'spread' ? 2 : 1), 1); }
    function goPrev() { loadPage(currentPage - (viewMode === 'spread' ? 2 : 1), -1); }

    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);
    floatPrev.addEventListener('click', goPrev);
    floatNext.addEventListener('click', goNext);

    // Fullscreen toggle (spread mode only)
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
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
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

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        // Ignore when page jump input is focused
        if (document.activeElement && document.activeElement.id === 'page-jump-input') return;
        
        if (e.key === 'ArrowLeft') goPrev();
        else if (e.key === 'ArrowRight') goNext();
        else if ((e.key === 'f' || e.key === 'F') && viewMode === 'spread') toggleFullscreen();
        else if (e.key === 'Escape') closePageJump();
    });

    // Touch swipe
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

    pageInd.addEventListener('click', () => {
        jumpOverlay.classList.add('active');
        jumpInput.value = currentPage;
        jumpInput.focus();
        jumpInput.select();
    });

    function doJump() {
        const p = parseInt(jumpInput.value);
        if (p >= MIN_PAGE && p <= MAX_PAGE) {
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

    // Chapter quick-jump buttons
    document.querySelectorAll('#page-jump-chapters button').forEach(btn => {
        btn.addEventListener('click', () => {
            const p = parseInt(btn.dataset.page);
            if (p) {
                closePageJump();
                loadPage(p);
            }
        });
    });

    // ===== Mouse wheel zoom (Ctrl + scroll) =====
    const imagePaneEl = document.getElementById('image-pane');
    imagePaneEl.addEventListener('wheel', (e) => {
        if (e.ctrlKey) {
            e.preventDefault();
            if (e.deltaY < 0) {
                currentZoom = Math.min(3, currentZoom + 0.1);
            } else {
                currentZoom = Math.max(0.5, currentZoom - 0.1);
            }
            applyZoom();
        }
    }, { passive: false });

    // Initial load
    loadPage(currentPage);
});
