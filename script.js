function yesClick() {
  window.location.href = "yes.html";
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

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

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}

/* Floating Emojis */
const emojis = ["💖", "💕", "✨", "💘", "😍"];
const container = document.querySelector(".emoji-container");

setInterval(() => {
  const emoji = document.createElement("span");
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.animationDuration = (Math.random() * 3 + 4) + "s";
  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 6000);
}, 500);
