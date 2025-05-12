document.addEventListener('DOMContentLoaded', function () {
    // Brand Filter
    const brandLogos = document.querySelectorAll('.brand-logo');
    const carCards = document.querySelectorAll('.car-card');

    brandLogos.forEach(logo => {
        logo.addEventListener('click', function () {
            const brand = this.getAttribute('data-brand');
            carCards.forEach(car => {
                if (car.getAttribute('data-brand') === brand) {
                    car.classList.remove('hidden');
                } else {
                    car.classList.add('hidden');
                }
            });

            brandLogos.forEach(logo => logo.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const defaultBrandLogo = document.querySelector('.brand-logo[data-brand="chevrolet"]');
    if (defaultBrandLogo) {
        defaultBrandLogo.click();
    }

    carCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ?
                '<i class="fas fa-times"></i>' :
                '<i class="fas fa-bars"></i>';
            hamburger.setAttribute('aria-expanded', navLinks.classList.contains('active'));
        });
    }
});

// Header Scroll Effect
const header = document.querySelector('header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
