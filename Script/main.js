// ========================================
// EXPLORE DROPDOWN
// ========================================

const exploreMenu = document.getElementById("exploreMenu");
const exploreDropdown = document.getElementById("exploreDropdown");
const exploreArrow = document.getElementById("exploreArrow");
const exploreBtn = document.getElementById("exploreBtn");

let exploreOpened = false;

function openExploreMenu() {
    if (visitOpened) closeVisitMenu();

    exploreOpened = true;

    exploreDropdown.classList.remove(
        "invisible",
        "opacity-0",
        "translate-y-2"
    );

    exploreArrow.classList.add("rotate-180");
    exploreBtn.classList.add("font-bold");
}

function closeExploreMenu() {
    exploreOpened = false;

    exploreDropdown.classList.add(
        "invisible",
        "opacity-0",
        "translate-y-2"
    );

    exploreArrow.classList.remove("rotate-180");
    exploreBtn.classList.remove("font-bold");

    // Prevent a stale-scroll jump on next scroll event
    lastScrollY = window.scrollY;
}

function toggleExploreMenu() {
    exploreOpened ? closeExploreMenu() : openExploreMenu();
}


// ========================================
// VISIT DROPDOWN
// ========================================

const visitMenu = document.getElementById("visitMenu");
const visitDropdown = document.getElementById("visitDropdown");
const visitArrow = document.getElementById("visitArrow");
const visitBtn = document.getElementById("visitBtn");

let visitOpened = false;

function openVisitMenu() {
    if (exploreOpened) closeExploreMenu();

    visitOpened = true;

    visitDropdown.classList.remove(
        "invisible",
        "opacity-0",
        "translate-y-2"
    );

    visitArrow.classList.add("rotate-180");
    visitBtn.classList.add("font-bold");
}

function closeVisitMenu() {
    visitOpened = false;

    visitDropdown.classList.add(
        "invisible",
        "opacity-0",
        "translate-y-2"
    );

    visitArrow.classList.remove("rotate-180");
    visitBtn.classList.remove("font-bold");

    // Prevent a stale-scroll jump on next scroll event
    lastScrollY = window.scrollY;
}

function toggleVisitMenu() {
    visitOpened ? closeVisitMenu() : openVisitMenu();
}


// ========================================
// DESKTOP DROPDOWNS
// ========================================

const supportsHover = window.matchMedia("(hover: hover)").matches;

if (supportsHover) {

    // ------------------------------------
    // Explore hover
    // ------------------------------------

    exploreMenu.addEventListener(
        "mouseenter",
        openExploreMenu
    );

    exploreMenu.addEventListener(
        "mouseleave",
        (e) => {
            if (exploreMenu.contains(e.relatedTarget)) return;
            closeExploreMenu();
        }
    );


    // ------------------------------------
    // Visit hover
    // ------------------------------------

    visitMenu.addEventListener(
        "mouseenter",
        openVisitMenu
    );

    visitMenu.addEventListener(
        "mouseleave",
        (e) => {
            if (visitMenu.contains(e.relatedTarget)) return;
            closeVisitMenu();
        }
    );
}


// ----------------------------------------
// Explore button click
// ----------------------------------------

exploreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleExploreMenu();
});


// ----------------------------------------
// Visit button click
// ----------------------------------------

visitBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleVisitMenu();
});


// ----------------------------------------
// Click outside dropdowns
// ----------------------------------------

document.addEventListener("click", (e) => {

    if (
        exploreOpened &&
        !exploreMenu.contains(e.target)
    ) {
        closeExploreMenu();
    }

    if (
        visitOpened &&
        !visitMenu.contains(e.target)
    ) {
        closeVisitMenu();
    }
});


// ========================================
// MOBILE MENU
// ========================================

const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

const barTop = document.getElementById("barTop");
const barMid = document.getElementById("barMid");
const barBot = document.getElementById("barBot");

const navInner = document.getElementById("navInner");

let mobileOpened = false;

function openMobileMenu() {
    mobileOpened = true;

    mobileMenu.classList.remove(
        "max-h-0",
        "opacity-0",
        "pointer-events-none"
    );

    mobileMenu.classList.add(
        "max-h-96",
        "opacity-100",
            "pointer-events-auto"
    );

    barTop.classList.add(
        "rotate-45",
        "translate-y-2"
    );

    barMid.classList.add("opacity-0");

    barBot.classList.add(
        "-rotate-45",
        "-translate-y-2"
    );

    hamburgerBtn.setAttribute(
        "aria-expanded",
        "true"
    );

    navInner.classList.remove(
        "bg-olive-900/30"
    );

    navInner.classList.add(
        "bg-black/90"
    );
}

function closeMobileMenu() {
    mobileOpened = false;

    mobileMenu.classList.add(
        "max-h-0",
        "opacity-0",
        "pointer-events-none"
    );

    mobileMenu.classList.remove(
        "max-h-96",
        "opacity-100",
        "pointer-events-auto"
    );

    barTop.classList.remove(
        "rotate-45",
        "translate-y-2"
    );

    barMid.classList.remove("opacity-0");

    barBot.classList.remove(
        "-rotate-45",
        "-translate-y-2"
    );

    hamburgerBtn.setAttribute(
        "aria-expanded",
        "false"
    );

    navInner.classList.remove(
        "bg-black/90"
    );

    navInner.classList.add(
        "bg-olive-900/30"
    );
}

function toggleMobileMenu() {
    mobileOpened
        ? closeMobileMenu()
        : openMobileMenu();
}


// ----------------------------------------
// Hamburger click
// ----------------------------------------

hamburgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMobileMenu();
});


// ----------------------------------------
// Click outside mobile menu
// ----------------------------------------

document.addEventListener("click", (e) => {

    if (!mobileOpened) return;

    if (
        mobileMenu.contains(e.target) ||
        hamburgerBtn.contains(e.target)
    ) {
        return;
    }

    closeMobileMenu();
});


// ----------------------------------------
// Close mobile menu on desktop resize
// ----------------------------------------

window.addEventListener("resize", () => {

    if (
        window.innerWidth >= 640 &&
        mobileOpened
    ) {
        closeMobileMenu();
    }
});


// ========================================
// NAVBAR SCROLL BEHAVIOR
// ========================================

const navbar = document.getElementById("navbar");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    // Don't hide navbar while either dropdown is open
    if (
        exploreOpened ||
        visitOpened
    ) {
        return;
    }

    const currentScrollY = window.scrollY;


    // ------------------------------------
    // Always show navbar near the top
    // ------------------------------------

    if (currentScrollY <= 10) {

        navbar.classList.remove(
            "-translate-y-full"
        );
    }


    // ------------------------------------
    // Scrolling down
    // ------------------------------------

    else if (currentScrollY > lastScrollY) {

        navbar.classList.add(
            "-translate-y-full"
        );
    }


    // ------------------------------------
    // Scrolling up
    // ------------------------------------

    else {

        navbar.classList.remove(
            "-translate-y-full"
        );
    }

    lastScrollY = currentScrollY;
});


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