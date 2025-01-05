document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.intro, .about-item, .value-item');

    elements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            elements.forEach(el => {
                if (el !== element) {
                    el.classList.add('blurred');
                }
            });
            element.classList.add('focused');
        });

        element.addEventListener('mouseleave', () => {
            elements.forEach(el => {
                el.classList.remove('blurred');
                el.classList.remove('focused');
            });
        });
    });
});