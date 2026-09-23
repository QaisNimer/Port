const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");
const reveals = document.querySelectorAll(".reveal");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

function updatePage() {
    navbar.classList.toggle("scrolled", window.scrollY > 25);

    let current = "";
    sections.forEach(section => {
        const top = section.offsetTop - 130;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
}

window.addEventListener("scroll", updatePage);
updatePage();

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(element => observer.observe(element));

document.getElementById("year").textContent = new Date().getFullYear();
