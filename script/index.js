const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
const frameCount = 192;
const images = [];

function currentFrame(index) {
    return `assets/index/museum-background/frames/frame_${String(index).padStart(4, "0")}.webp`;
}

let current = 0;
let target = 0;

// Resize canvas
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    drawFrame(Math.round(current));
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Preload every frame
for (let i = 1; i <= frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
}

// Draw one frame
function drawFrame(index) {

    if (!images[index]) {
        console.error("Frame doesn't exist:", index);
        return;
    }

    const image = images[index];

    if (!image.complete) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const scale = Math.max(
        canvas.width / image.width,
        canvas.height / image.height
    );

    const x = (canvas.width - image.width * scale) / 2;
    const y = (canvas.height - image.height * scale) / 2;

    ctx.drawImage(
        image,
        x,
        y,
        image.width * scale,
        image.height * scale
    );
}

window.addEventListener("scroll", () => {

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

    target = progress * (frameCount - 1);

});

function animate() {

    current += (target - current) * 0.08;

    drawFrame(Math.round(current));

    requestAnimationFrame(animate);

}

images[0].onload = () => {
    drawFrame(0);
    animate();
};