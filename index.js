const cake = document.getElementById("cake");
const message = document.getElementById("message");
const gift = document.getElementById("gift");
const blessings = document.getElementById("blessings");

let clicked = false;

// 🎂 Cake Click
cake.onclick = () => {
    if (clicked) return;
    clicked = true;

    // Blow candle
    document.querySelector(".flame").style.display = "none";

    // Animate cake
    cake.classList.add("cut");

    // Fireworks + confetti
    startConfetti();

    // Typing message
    typeText(
        "🎉 Congratulations Dad! 🎉\nPromoted to Chief Manager (CM)!",
        message
    );

    setTimeout(() => {
        gift.classList.add("show");
    }, 2500);
};

// 🎁 Gift Click
gift.onclick = () => {
    gift.classList.add("open");

    setTimeout(() => {
        blessings.innerHTML = `
        🌟 Wishing you endless success 🌟<br><br>
        Your hard work inspires us every day ❤️<br><br>
        🚀 Keep rising higher, we are proud of you 🚀
        `;
        blessings.classList.add("show");
    }, 500);
};

// ✨ Typing Effect
function typeText(text, element) {
    element.classList.add("show");
    element.innerHTML = "";
    let i = 0;

    const interval = setInterval(() => {
        element.innerHTML += text[i];
        i++;
        if (i >= text.length) clearInterval(interval);
    }, 40);
}

// 🎊 Confetti
function startConfetti() {
    for (let i = 0; i < 150; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * 100 + "vw";
        conf.style.background = randomColor();
        conf.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(conf);

        setTimeout(() => conf.remove(), 5000);
    }
}

// 🎨 Colors
function randomColor() {
    const colors = ["red", "yellow", "blue", "green", "pink", "white"];
    return colors[Math.floor(Math.random() * colors.length)];
}
