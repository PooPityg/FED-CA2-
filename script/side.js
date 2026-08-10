const topBtn = document.getElementById("topBtn");
const feedbtn = document.getElementById("feedbackBtn");
const buttonContainer = document.getElementById("sideBtnContainer");
const heroSec = document.getElementById("hero");

// Show/hide entire container after hero section
window.addEventListener('scroll', () => {
    const heroBottom = heroSec.offsetHeight;
    const scrollTopCheck = window.scrollY;

    if (scrollTopCheck > heroBottom) {
        buttonContainer.classList.remove('opacity-0' , 'pointer-events-none');
        buttonContainer.classList.add('opacity-100', 'pointer-events-auto'); //enable user to click on btn
    } else {
        buttonContainer.classList.add('opacity-0' , 'pointer-events-none');
        buttonContainer.classList.remove('opacity-100', 'pointer-events-auto');
    }
});

// Top button - smooth scroll to top
if (topBtn) {
    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Feedback button - navigate on click
if (feedbtn) {
    feedbtn.addEventListener('click', () => {
        window.location.href = "feedback.html";
    });
}