const video = document.getElementById("intro-video");
const intro = document.getElementById("intro");
const overlay = document.getElementById("intro-overlay");
const title = document.getElementById("intro-title");
const subtitle = document.getElementById("intro-subtitle");
const scrollHint = document.getElementById("scrollHint");

// Prevent scrolling during intro
document.body.style.overflow = "hidden";

let triggered = false;

function runOutro() {
    if (triggered) return;
    triggered = true;

    video.pause();
    video.classList.add("freeze");

    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-40");

    setTimeout(() => {
        title.classList.remove("opacity-0", "translate-y-6");
    }, 1000);

    setTimeout(() => {
        subtitle.classList.remove("opacity-0", "translate-y-6");
    }, 1800);

    setTimeout(() => {
        scrollHint.classList.remove("opacity-0");
        document.body.style.overflow = "";

        intro.classList.remove("fixed", "z-[100]");
        intro.classList.add("relative", "z-30");

        navbar.classList.remove("opacity-0", "-translate-y-4", "pointer-events-none");
    }, 2600);
}

video.addEventListener("timeupdate", () => {
    if (triggered) return;
    // Freeze 0.15 seconds before the video actually ends
    if (video.duration - video.currentTime < 0.15) {
        runOutro();
    }
});

// Fallback: if the video fails to load/play, don't leave the page stuck
video.addEventListener("error", runOutro);

// Fallback: if autoplay is blocked or timeupdate never fires for some reason,
// force the outro after a max wait so the page never gets permanently locked.
setTimeout(runOutro, 8000);