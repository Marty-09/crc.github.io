console.log("Sito caricato correttamente!");

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-in');

    function revealOnScroll() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (position < screenHeight - 50) {
                element.classList.add('visible');
            }
        });
    }

    revealOnScroll(); // Esegui subito all'avvio l'animazione
    window.addEventListener('scroll', revealOnScroll)
});
