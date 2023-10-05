const carousel = document.querySelector(".carousel-animals");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const slideWidth = carousel.offsetWidth / 4; // Largura de 1 slide
let position = 0;

// Clona os primeiros slides e os adiciona ao final do carrossel
const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
const clonedSlides = slides.slice(0, 4).map(slide => slide.cloneNode(true));
clonedSlides.forEach(clonedSlide => {
    carousel.appendChild(clonedSlide);
});

nextButton.addEventListener("click", () => {
    position -= slideWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${position}px)`;

    // Quando chegamos ao final do carrossel original, reinicie a posição
    if (position <= -slideWidth * (slides.length - 4)) {
        setTimeout(() => {
            position = 0;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
        }, 500); // Espera a transição terminar antes de reiniciar
    }
});

prevButton.addEventListener("click", () => {
    position += slideWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${position}px)`;

    // Quando chegamos ao início do carrossel original, vá para o final do carrossel clonado
    if (position >= 0) {
        setTimeout(() => {
            position = -slideWidth * (slides.length - 4);
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
        }, 500); // Espera a transição terminar antes de mover para o final
    }
});
