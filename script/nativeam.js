const buttons = document.querySelectorAll(".button")
const suns = document.querySelectorAll(".sun")

buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        suns[index].classList.remove("opacity-0", "pointer-events-none");
        suns[index].classList.add("opacity-100", "sunhighlight");
    });

    button.addEventListener('mouseleave', () => {
        suns[index].classList.add("opacity-0", "pointer-events-none");
        suns[index].classList.remove("opacity-100", "sunhighlight");
    });
});