// Scroll animation
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const scrollItems = document.querySelectorAll('.scroll-item');

scrollItems.forEach((item) => {
    observer.observe(item);
});

let lastScrollTop = 0;
const headerTop = document.querySelector('.js-header__top');
const headerBottom = document.querySelector('.js-header__bottom');
        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Cuộn xuống
                headerTop.classList.add('header__hidden');
               headerBottom.style.top='0';

            } else {
                // Cuộn lên
                headerTop.classList.remove('header__hidden');
                headerBottom.style.top='66px';
            }

            lastScrollTop = scrollTop;
        });