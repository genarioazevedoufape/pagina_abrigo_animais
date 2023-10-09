const carousel = document.querySelector(".carousel-animals");
const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");
const slideWidth = carousel.offsetWidth / 4; 
let position = 0;


const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
const clonedSlides = slides.slice(0, 4).map(slide => slide.cloneNode(true));
clonedSlides.forEach(clonedSlide => {
    carousel.appendChild(clonedSlide);
});

nextButton.addEventListener("click", () => {
    position -= slideWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${position}px)`;

    if (position <= -slideWidth * (slides.length - 4)) {
        setTimeout(() => {
            position = 0;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
        }, 500); 
    }
});

prevButton.addEventListener("click", () => {
    position += slideWidth;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(${position}px)`;

    if (position >= 0) {
        setTimeout(() => {
            position = -slideWidth * (slides.length - 4);
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(${position}px)`;
        }, 500);
    }
});

//Modal

const checkboxes = document.querySelectorAll('input[name="payment_method"]');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });
    });
});


const openModalButton = document.querySelector("#openModalButton");
const closeModalButton = document.querySelector("#closeModalButton");
const modal = document.querySelector("#donate-modal-content");
const fade = document.querySelector("#fade-donate-modal");

const toggleModal = () => {
    [modal, fade].forEach((el) => el.classList.toggle("hide"));
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

