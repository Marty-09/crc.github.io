console.log("Sito caricato correttamente!");

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.content, .contact');

    function revealOnScroll() {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll)
});
