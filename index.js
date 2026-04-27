const cake = document.getElementById("cake");
const gift = document.getElementById("gift");
const blessings = document.getElementById("blessings");
const title = document.getElementById("title");
const credit = document.getElementById("credit");

let cakeDone = false;

// 🎂 Cake click
cake.onclick = () => {
    if (cakeDone) return;
    cakeDone = true;

    // Fade credit
    credit.classList.add("fade");

    // Blow candle
    document.querySelector(".flame").style.display = "none";

    // Cut cake
    cake.classList.add("cut");

    // Update title
    setTimeout(() => {
        title.innerText = "🎉 Congratulations Dad! Chief Manager (CM) 🎉";
    }, 500);

    // Show gift
    setTimeout(() => {
        gift.classList.add("show");
    }, 1500);
};

// 🎁 Gift click
gift.onclick = () => {
    gift.classList.add("open");

    setTimeout(() => {
        blessings.innerHTML = `
        🌟 Wishing you endless success 🌟<br><br>
        Your dedication and hard work inspire us ❤️<br><br>
        🚀 Keep achieving greater heights 🚀
        `;
        blessings.classList.add("show");
    }, 500);
};
