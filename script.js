function playMusic() {
    const audio = document.getElementById("bg-audio");
    if (audio) {
        audio.play().catch(() => {
            // Autoplay may be blocked; play will resume after user interaction.
        });
    }
}

function scrollToMemories() {
    document.getElementById("memories").scrollIntoView({
        behavior: "smooth"
    });
}

/* Floating Hearts Effect */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);