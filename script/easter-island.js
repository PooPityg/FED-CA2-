// ==========================
// Read More Button
// ==========================

const readBtn = document.getElementById("readBtn");
const more = document.getElementById("more");

if (readBtn && more) {
    readBtn.addEventListener("click", function () {
        const isHidden = more.classList.toggle("hidden");
        readBtn.innerHTML = isHidden ? "Read More" : "Read Less";
    });
}
// ==========================
// Reveal Animation
// ==========================

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((section) => {
        const windowHeight = window.innerHeight;
        const top = section.getBoundingClientRect().top;

        if (top < windowHeight - 120) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

const carousel = document.getElementById("issuesCarousel");
const carouselButtons = document.querySelectorAll(".carousel-btn");

if (carousel) {
    carousel.addEventListener("wheel", (event) => {
        if (Math.abs(event.deltaY) > 0) {
            event.preventDefault();
            carousel.scrollLeft += event.deltaY;
        }
    }, { passive: false });
}

carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (!carousel) return;

        const direction = button.dataset.direction === "next" ? 1 : -1;
        const scrollAmount = carousel.clientWidth * 0.8 * direction;
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

