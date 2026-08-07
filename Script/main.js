const menu = document.getElementById("exploreMenu");
const dropdown = document.getElementById("exploreDropdown");
const arrow = document.getElementById("exploreArrow");
const btn = document.getElementById('exploreBtn');

let opened = false;

function openMenu() {
    opened = true;
    dropdown.classList.remove("invisible", "opacity-0", "translate-y-2");
    arrow.classList.add("rotate-180");
    btn.classList.add("font-bold"); 
}

function closeMenu() {
    opened = false;
    dropdown.classList.add("invisible", "opacity-0", "translate-y-2");
    arrow.classList.remove("rotate-180");
    lastScrollY = window.scrollY; // prevent a stale-scroll jump on next scroll event
    btn.classList.remove("font-bold");
}

function toggleMenu() {
    opened ? closeMenu() : openMenu();
}

const supportsHover = window.matchMedia("(hover: hover)").matches;

if (supportsHover) {
    // Cursor devices: hover opens/closes
    menu.addEventListener("mouseenter", openMenu);
    menu.addEventListener("mouseleave", (e) => {
        if (menu.contains(e.relatedTarget)) return;
        closeMenu();
    });
}

btn.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent this click from also triggering the document listener
    toggleMenu();
});

// Non-cursor devices: tap anywhere outside closes the menu
document.addEventListener("click", (e) => {
    if (!opened) return;
    if (menu.contains(e.target)) return; // click was inside the menu, ignore
    closeMenu();
});

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");
const barTop = document.getElementById("barTop");
const barMid = document.getElementById("barMid");
const barBot = document.getElementById("barBot");

let mobileOpened = false;

function openMobileMenu() {
    mobileOpened = true;
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-96", "opacity-100");
    barTop.classList.add("rotate-45", "translate-y-2");
    barMid.classList.add("opacity-0");
    barBot.classList.add("-rotate-45", "-translate-y-2");
    hamburgerBtn.setAttribute("aria-expanded", "true");
}

function closeMobileMenu() {
    mobileOpened = false;
    mobileMenu.classList.add("max-h-0", "opacity-0");
    mobileMenu.classList.remove("max-h-96", "opacity-100");
    barTop.classList.remove("rotate-45", "translate-y-2");
    barMid.classList.remove("opacity-0");
    barBot.classList.remove("-rotate-45", "-translate-y-2");
    hamburgerBtn.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
    mobileOpened ? closeMobileMenu() : openMobileMenu();
}

hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});

// Close mobile menu when tapping outside it
document.addEventListener("click", (e) => {
    if (!mobileOpened) return;
    if (mobileMenu.contains(e.target) || hamburgerBtn.contains(e.target)) return;
    closeMobileMenu();
});

// Close mobile menu automatically if the viewport is resized to desktop width
window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && mobileOpened) { // 768px = Tailwind's `md` breakpoint
        closeMobileMenu();
    }
});

const navbar = document.getElementById("navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (opened) return; // don't hide the navbar while the explore dropdown is open

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

const navInner = document.getElementById("navInner");

function openMobileMenu() {
    mobileOpened = true;
    mobileMenu.classList.remove("max-h-0", "opacity-0");
    mobileMenu.classList.add("max-h-96", "opacity-100");
    barTop.classList.add("rotate-45", "translate-y-2");
    barMid.classList.add("opacity-0");
    barBot.classList.add("-rotate-45", "-translate-y-2");
    hamburgerBtn.setAttribute("aria-expanded", "true");

    navInner.classList.remove("bg-olive-900/30");
    navInner.classList.add("bg-black/90");
}

function closeMobileMenu() {
    mobileOpened = false;
    mobileMenu.classList.add("max-h-0", "opacity-0");
    mobileMenu.classList.remove("max-h-96", "opacity-100");
    barTop.classList.remove("rotate-45", "translate-y-2");
    barMid.classList.remove("opacity-0");
    barBot.classList.remove("-rotate-45", "-translate-y-2");
    hamburgerBtn.setAttribute("aria-expanded", "false");

    navInner.classList.remove("bg-black/90");
    navInner.classList.add("bg-olive-900/30");
}