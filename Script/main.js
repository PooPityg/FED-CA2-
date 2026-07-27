
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