document.addEventListener('DOMContentLoaded', function() {
    const aboutHeader = document.querySelector('.about-header');
    const aboutContent = document.querySelector('.about-content');

    function fadeInOnScroll(element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    }

    function handleScroll() {
        fadeInOnScroll(aboutHeader);
        fadeInOnScroll(aboutContent);
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});
