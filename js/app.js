document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = parseInt(urlParams.get('page')) || 10;
    
    const MIN_PAGE = 1;
    const MAX_PAGE = 258;

    const imgEl = document.getElementById('textbook-img');
    const imgRightEl = document.getElementById('textbook-img-right');
    const imageWrapper = document.getElementById('image-wrapper');
    const pageInd = document.getElementById('page-indicator');
    const explanationDiv = document.getElementById('explanation-container');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnMode = document.getElementById('btn-mode');
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const fsIcon = document.getElementById('fs-icon');
    const fsLabel = document.getElementById('fs-label');
    const modeIcon = document.getElementById('mode-icon');
    const modeLabel = document.getElementById('mode-label');
    const viewerContainer = document.querySelector('.viewer-container');
    const floatingNav = document.getElementById('floating-nav');
    const floatPrev = document.getElementById('float-prev');
    const floatNext = document.getElementById('float-next');
    const floatPage = document.getElementById('float-page');
    const floatExitFs = document.getElementById('float-exit-fs');
    
    let isLectureMode = false;
    let currentZoom = 1;

    // Zoom
    document.getElementById('btn-zoom-in').addEventListener('click', () => {
        currentZoom += 0.2;
        applyZoom();
    });
    document.getElementById('btn-zoom-out').addEventListener('click', () => {
        currentZoom = Math.max(0.5, currentZoom - 0.2);
        applyZoom();
    });

    function applyZoom() {
        if (isLectureMode) {
            imageWrapper.style.transform = `scale(${currentZoom})`;
            imgEl.style.transform = 'none';
            imgRightEl.style.transform = 'none';
        } else {
            imageWrapper.style.transform = 'none';
            imgEl.style.transform = `scale(${currentZoom})`;
        }
    }

    function getImageSrc(pageNum) {
        const pdfPageNum = pageNum + 2;
        return `images/math_g2_keirinkan/page_${pdfPageNum.toString().padStart(4, '0')}.png`;
    }

    function animatePageTurn(direction) {
        imageWrapper.classList.remove('page-turn-left', 'page-turn-right');
        void imageWrapper.offsetWidth;
        imageWrapper.classList.add(direction > 0 ? 'page-turn-left' : 'page-turn-right');
    }

    function loadPage(pageNum, direction) {
        if (pageNum < MIN_PAGE) pageNum = MIN_PAGE;
        if (pageNum > MAX_PAGE) pageNum = MAX_PAGE;
        currentPage = pageNum;
        
        const newUrl = window.location.protocol + "//" + window.location.host + 
            window.location.pathname + '?chapter=1&page=' + currentPage;
        window.history.pushState({ path: newUrl }, '', newUrl);

        currentZoom = 1;
        imgEl.style.transform = 'scale(1)';
        imgRightEl.style.transform = 'scale(1)';
        imageWrapper.style.transform = 'none';

        if (direction !== undefined) animatePageTurn(direction);

        if (isLectureMode) {
            let leftPage = currentPage % 2 === 0 ? currentPage : currentPage - 1;
            if (leftPage < MIN_PAGE) leftPage = MIN_PAGE;
            currentPage = leftPage;

            imgEl.src = getImageSrc(leftPage);
            const rightPage = leftPage + 1;
            if (rightPage <= MAX_PAGE) {
                imgRightEl.src = getImageSrc(rightPage);
                imgRightEl.style.display = 'block';
            } else {
                imgRightEl.style.display = 'none';
            }
            const label = `p.${leftPage}–${Math.min(rightPage, MAX_PAGE)}`;
            pageInd.textContent = label;
            floatPage.textContent = label;
            document.getElementById('chapter-title').textContent = label;
        } else {
            imgEl.src = getImageSrc(currentPage);
            imgRightEl.style.display = 'none';
            pageInd.textContent = `p.${currentPage}`;

            const data = guideData[currentPage.toString()];
            if (data) {
                explanationDiv.innerHTML = data.content;
                document.getElementById('chapter-title').textContent = data.title;
            } else {
                document.getElementById('chapter-title').textContent = `テキスト p.${currentPage}`;
                explanationDiv.innerHTML = `<div class="empty-state">このページには特別な解説はありません。</div>`;
            }

            if (window.MathJax && window.MathJax.typesetPromise) {
                MathJax.typesetPromise([explanationDiv]).catch(e => console.log(e.message));
            }
        }
    }

    function goNext() { loadPage(currentPage + (isLectureMode ? 2 : 1), 1); }
    function goPrev() { loadPage(currentPage - (isLectureMode ? 2 : 1), -1); }

    // Header nav
    btnPrev.addEventListener('click', goPrev);
    btnNext.addEventListener('click', goNext);

    // Floating nav
    floatPrev.addEventListener('click', goPrev);
    floatNext.addEventListener('click', goNext);

    // Mode toggle
    btnMode.addEventListener('click', () => {
        isLectureMode = !isLectureMode;
        viewerContainer.classList.toggle('lecture-mode', isLectureMode);
        btnMode.classList.toggle('active', isLectureMode);
        modeIcon.textContent = isLectureMode ? '📝' : '📖';
        modeLabel.textContent = isLectureMode ? '解説モード' : '講義モード';
        
        btnFullscreen.style.display = isLectureMode ? 'inline-flex' : 'none';
        floatingNav.style.display = isLectureMode ? 'block' : 'none';
        
        if (!isLectureMode && document.fullscreenElement) {
            document.exitFullscreen();
        }
        loadPage(currentPage);
    });

    // Fullscreen toggle
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

    // Fullscreen change event (handles ESC and all exit methods)
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            document.body.classList.remove('fullscreen-mode');
            btnFullscreen.classList.remove('active');
            fsIcon.textContent = '📺';
            fsLabel.textContent = '全画面';
            floatExitFs.style.display = 'none';
        }
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goPrev();
        else if (e.key === 'ArrowRight') goNext();
        else if ((e.key === 'f' || e.key === 'F') && isLectureMode) toggleFullscreen();
    });

    // Touch swipe support for tablets
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

    loadPage(currentPage);
});
