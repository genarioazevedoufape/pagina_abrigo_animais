//CheckBox

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


// Selecione todos os elementos com a classe .openModalButtonDonate
const openModalButtonsDonate = document.querySelectorAll(".openModalButtonDonate");
const closeModalButtonDonate = document.querySelectorAll(".closeModalButtonDonate");
const modalDonate = document.querySelector("#donate-modal-content");
const fadeDonate = document.querySelector("#fade-donate-modal");

const toggleModalDonate = () => {
    [modalDonate, fadeDonate].forEach((el) => el.classList.toggle("hide"));
};

openModalButtonsDonate.forEach((button) => {
    button.addEventListener("click", () => toggleModalDonate());
});

closeModalButtonDonate.forEach((button) => {
    button.addEventListener("click", () => toggleModalDonate());
});

// I wanna help

const redirectToPageWanna = document.getElementById("modal-button-donate");

redirectToPageWanna.addEventListener("click", function() {
    window.location.href = "/html/success-page.html";
});

//button back

const redirectToPageBack = document.querySelector(".button-back");
redirectToPageBack.addEventListener("click", function() {
window.location.href = "/html/index.html";
});