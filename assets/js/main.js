document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. Hamburger Menu & Mobile Navigation
    // ==========================================
    const hamburger = document.querySelector('.hamburger');
    const headerNav = document.querySelector('.header-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger && headerNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('is-active');
            headerNav.classList.toggle('is-open');
        });

        // スマホ時にリンクをクリックしたらメニューを閉じる
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 991) {
                    hamburger.classList.remove('is-active');
                    headerNav.classList.remove('is-open');
                }
            });
        });
    }

    // ==========================================
    // 2. Smooth Scroll
    // ==========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const headerEl = document.querySelector('.header');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return; // ダミーリンクは無視

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                // クリック時にヘッダー高さを再取得（レスポンシブ対応）
                const headerHeight = headerEl ? headerEl.offsetHeight : 56;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // 3. Overlay Close (Writer Details)
    // ==========================================
    const closeOverlays = document.querySelectorAll('.close-overlay');
    closeOverlays.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const details = e.target.closest('details');
            if (details) {
                details.removeAttribute('open');
            }
        });
    });
});
