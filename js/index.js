document.addEventListener('DOMContentLoaded', () => {

    /* Menu burger (affiché seulement sur mobile) */
    const burger = document.querySelector('.burger');
    const menu = document.getElementById('menu');

    if (burger && menu) {
        const closeMenu = () => {
            menu.classList.remove('open');
            burger.setAttribute('aria-expanded', 'false');
        };

        burger.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('open');
            burger.setAttribute('aria-expanded', String(isOpen));
        });

        menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

        window.addEventListener('resize', () => {
            if (window.innerWidth > 900) closeMenu();
        });
    }

    /* Apparition au scroll (inchangé) */
    const items = document.querySelectorAll('.card, .card_projet, .tl-item, .profile-block');
    items.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    items.forEach(el => observer.observe(el));
});
