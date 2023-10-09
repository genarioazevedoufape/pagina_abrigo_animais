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

// Donate-Modal

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


const openModalButtonDonate = document.querySelector("#openModalButtonDonate");
const closeModalButtonDonate = document.querySelector("#closeModalButtonDonate");
const modalDonate = document.querySelector("#donate-modal-content");
const fadeDonate = document.querySelector("#fade-donate-modal");

const toggleModalDonate = () => {
    [modalDonate, fadeDonate].forEach((el) => el.classList.toggle("hide"));
};

openModalButtonDonate.addEventListener("click", () => toggleModalDonate());
closeModalButtonDonate.addEventListener("click", () => toggleModalDonate());

// Para os botões de adoção
const openModalButtonAdopt = document.querySelector(".openModalButtonAdopt");
const closeModalButtonAdopt = document.querySelector("#closeModalButtonAdopt");
const modalAdopt = document.querySelector("#adopt-modal-content");
const fadeAdopt = document.querySelector("#fade-adopt-modal");

const toggleModalAdopt = () => {
    [modalAdopt, fadeAdopt].forEach((el) => el.classList.toggle("hide"));
};

openModalButtonAdopt.addEventListener("click", () => toggleModalAdopt());
closeModalButtonAdopt.addEventListener("click", () => toggleModalAdopt());


// View Adoptables

const redirectToPageAdotables = document.getElementById("green");

redirectToPageAdotables.addEventListener("click", function() {
    window.location.href = "/html/adotables-page.html";
});

//View Adoptables

const redirectToPageAdotablesButton = document.querySelector(".section-adorable-adoptables-container-botton");

redirectToPageAdotablesButton.addEventListener("click", function() {
    window.location.href = "/html/adotables-page.html";
});


//subscribe

const redirectToPageSubscribes = document.getElementById("subscribe-section-information-button");

redirectToPageSubscribes.addEventListener("click", function() {
    window.location.href = "/html/success-page.html";
});

// I wanna help

const redirectToPageWanna = document.getElementById("modal-button-donate");

redirectToPageWanna.addEventListener("click", function() {
    window.location.href = "/html/success-page.html";
});

// I wanna Adopt

const redirectToPageAdopt = document.getElementById("modal-button-adopt");

redirectToPageAdopt.addEventListener("click", function() {
    window.location.href = "/html/success-page.html";
});
