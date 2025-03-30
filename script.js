console.log("Sito caricato correttamente!");

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.content, .contact');

    function revealOnScroll() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            if (position < screenHeight - 50) {
                element.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
