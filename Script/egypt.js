const video = document.getElementById("intro-video");
const intro = document.getElementById("intro");
const overlay = document.getElementById("intro-overlay");
const title = document.getElementById("intro-title");
const subtitle = document.getElementById("intro-subtitle");
const scrollHint = document.getElementById("scrollHint");

document.body.style.overflow = "hidden";

let triggered = false;
let hardFallbackTimer = null;

function clearFallback() {
    if (hardFallbackTimer) {
        clearTimeout(hardFallbackTimer);
        hardFallbackTimer = null;
    }
}

function runOutro() {
    if (triggered) return;
    triggered = true;
    clearFallback();

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
    if (video.duration && video.duration - video.currentTime < 0.15) {
        runOutro();
    }
});

// Once we know the real duration, set a fallback slightly longer than the
// video itself, in case timeupdate never fires near the end (e.g. tab
// throttling, seeking issues, codec quirks).
video.addEventListener("loadedmetadata", () => {
    clearFallback();
    if (isFinite(video.duration)) {
        hardFallbackTimer = setTimeout(runOutro, (video.duration * 1000) + 500);
    } else {
        // duration unknown (e.g. Infinity) — fall back to a generous flat timer
        hardFallbackTimer = setTimeout(runOutro, 15000);
    }
});

video.addEventListener("error", runOutro);

// Safety net in case metadata never loads at all (blocked autoplay, bad src, etc.)
hardFallbackTimer = setTimeout(runOutro, 8000);