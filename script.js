const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* YES → go to love page */
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

/* NO → run away */
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
});

/* Floating Emojis */
const emojis = ["💖", "💕", "✨", "💘", "😍"];
const container = document.querySelector(".emoji-container");

setInterval(() => {
  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";
  container.appendChild(emoji);

  setTimeout(() => emoji.remove(), 6000);
}, 500);
