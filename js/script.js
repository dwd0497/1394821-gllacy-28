var feedbackBtn = document.querySelector(".feedback-btn");
var feedbackModal = document.querySelector(".feedback-modal");
var overlay = document.querySelector(".overlay");
var closeBtn = document.querySelector(".close-btn");
var feedbackName = document.querySelector("#feedback-name");
var feedbackEmail = document.querySelector("#feedback-email");
var feedbackForm = document.querySelector(".feedback-form");


feedbackBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackModal.classList.add("show-block-bounce");
    overlay.classList.add("show-block");
    feedbackName.focus();
});

closeBtn.addEventListener("click", function () {
    feedbackModal.classList.remove("show-block-bounce");
    overlay.classList.remove("show-block");
});

overlay.addEventListener("click", function () {
    feedbackModal.classList.remove("show-block-bounce");
    overlay.classList.remove("show-block");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27 && feedbackModal.classList.contains("show-block-bounce")) {
        evt.preventDefault();
        feedbackModal.classList.remove("show-block-bounce");
        overlay.classList.remove("show-block");
    }
});