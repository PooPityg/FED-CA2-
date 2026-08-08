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

// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 300) {
            topBtn.classList.remove("hidden");
        } else {
            topBtn.classList.add("hidden");
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}