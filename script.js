const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");
menuBtn.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
menuBtn.setAttribute("aria-expanded", "false");
});
});

document.getElementById("year").textContent =
new Date().getFullYear();

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
const name = contactForm.elements["name"].value.trim();
const email = contactForm.elements["email"].value.trim();
const subject = contactForm.elements["subject"].value.trim();
const message = contactForm.elements["message"].value.trim();
const formMessage = document.getElementById("formMessage");

if (
    name.length < 2 ||
    !email.includes("@") ||
    subject.length < 1 ||
    message.length < 5
) {
    event.preventDefault();

    formMessage.textContent =
        "Please enter valid details and a message of at least 5 characters.";
}

});