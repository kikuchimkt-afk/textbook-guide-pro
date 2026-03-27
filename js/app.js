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
    const modeIcon = document.getElementById('mode-icon');
    const modeLabel = document.getElementById('mode-label');
    const viewerContainer = document.querySelector('.viewer-container');
    
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
        imgEl.style.transform = `scale(${currentZoom})`;
        if (isLectureMode) imgRightEl.style.transform = `scale(${currentZoom})`;
    }

    function getImageSrc(pageNum) {
        const pdfPageNum = pageNum + 2;
        return `images/math_g2_keirinkan/page_${pdfPageNum.toString().padStart(4, '0')}.png`;
    }

    // Page turn animation
    function animatePageTurn(direction) {
        imageWrapper.classList.remove('page-turn-left', 'page-turn-right');
        void imageWrapper.offsetWidth; // reflow
        imageWrapper.classList.add(direction > 0 ? 'page-turn-left' : 'page-turn-right');
    }

    function loadPage(pageNum, direction) {
        if (pageNum < MIN_PAGE) pageNum = MIN_PAGE;
        if (pageNum > MAX_PAGE) pageNum = MAX_PAGE;
        currentPage = pageNum;
        
        // URL update
        const newUrl = window.location.protocol + "//" + window.location.host + 
            window.location.pathname + '?chapter=1&page=' + currentPage;
        window.history.pushState({ path: newUrl }, '', newUrl);

        // Reset zoom
        currentZoom = 1;
        imgEl.style.transform = 'scale(1)';
        imgRightEl.style.transform = 'scale(1)';

        // Page turn animation
        if (direction !== undefined) animatePageTurn(direction);

        if (isLectureMode) {
            // Lecture mode: left = even page, right = odd page
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
            pageInd.textContent = `p.${leftPage}–${Math.min(rightPage, MAX_PAGE)}`;
            document.getElementById('chapter-title').textContent = `p.${leftPage}–${rightPage}`;
        } else {
            // Normal mode
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

    // Navigation
    btnPrev.addEventListener('click', () => {
        loadPage(currentPage - (isLectureMode ? 2 : 1), -1);
    });
    btnNext.addEventListener('click', () => {
        loadPage(currentPage + (isLectureMode ? 2 : 1), 1);
    });

    // Mode toggle
    btnMode.addEventListener('click', () => {
        isLectureMode = !isLectureMode;
        viewerContainer.classList.toggle('lecture-mode', isLectureMode);
        btnMode.classList.toggle('active', isLectureMode);
        modeIcon.textContent = isLectureMode ? '📝' : '📖';
        modeLabel.textContent = isLectureMode ? '解説モード' : '講義モード';
        loadPage(currentPage);
    });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        const step = isLectureMode ? 2 : 1;
        if (e.key === 'ArrowLeft') loadPage(currentPage - step, -1);
        else if (e.key === 'ArrowRight') loadPage(currentPage + step, 1);
    });

    loadPage(currentPage);
});
