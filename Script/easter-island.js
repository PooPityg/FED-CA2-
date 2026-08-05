// ==========================
// Read More Button
// ==========================

const readBtn = document.getElementById("readBtn");
const more = document.getElementById("more");

readBtn.onclick = function () {

    if (more.style.display === "block") {

        more.style.display = "none";
        readBtn.innerHTML = "Read More";

    } else {

        more.style.display = "block";
        readBtn.innerHTML = "Read Less";
    }
};
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
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}