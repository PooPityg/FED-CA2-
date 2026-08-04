const menu = document.getElementById("exploreMenu");
const dropdown = document.getElementById("exploreDropdown");
const arrow = document.getElementById("exploreArrow");
const btn = document.getElementById('exploreBtn')

let opened = false;

function openMenu() {
    opened = true;
    dropdown.classList.remove("invisible");
    dropdown.classList.remove("opacity-0");
    dropdown.classList.remove("scale-95");

    arrow.classList.add("rotate-180");
}

function closeMenu() {
    opened = false;
    dropdown.classList.add("invisible");
    dropdown.classList.add("opacity-0");
    dropdown.classList.add("scale-95");

    arrow.classList.remove("rotate-180");
}

menu.addEventListener("mouseenter", openMenu);

menu.addEventListener("mouseleave", (e) => {
    if (menu.contains(e.relatedTarget)) return;
    closeMenu();
});

btn.addEventListener('click', () => {
    if (!opened) {
        openMenu()
        return
    }
    else
        closeMenu()
})

const navbar = document.getElementById("navbar");
console.log(navbar)
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Always show navbar near the top
    if (currentScrollY <= 10) {
        navbar.classList.remove("-translate-y-full");
    }
    // Scrolling down
    else if (currentScrollY > lastScrollY) {
        navbar.classList.add("-translate-y-full");
    }
    // Scrolling up
    else {
        navbar.classList.remove("-translate-y-full");
    }

    lastScrollY = currentScrollY;
});
