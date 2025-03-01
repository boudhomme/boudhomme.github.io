document.addEventListener('DOMContentLoaded', function () {
    // Animation des éléments au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.experience-item, section h2, section p');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialisation des styles pour l'animation
    document.querySelectorAll('.experience-item, section h2, section p').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.5s ease-out';
    });

    // Back to top button avec animation fluide
    const backToTopButton = document.querySelector('.back-to-top');
    
    const updateBackToTopButton = () => {
        if (window.scrollY > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transform = 'scale(1)';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.transform = 'scale(0.8)';
        }
    };

    // Navigation smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Event listeners
    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            animateOnScroll();
            updateBackToTopButton();
        });
    });

    backToTopButton.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Lancer l'animation initiale
    animateOnScroll();
});
