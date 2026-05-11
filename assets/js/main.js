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
    const headerHeight = document.querySelector('.header').offsetHeight || 71;

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return; // ダミーリンクは無視

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});
