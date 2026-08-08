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

