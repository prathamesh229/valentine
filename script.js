function yesClick() {
  alert("Yay! 💖 Happy Valentine’s Day 🥰");
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  btn.style.position = "absolute";
  btn.style.left = Math.random() * 80 + "vw";
  btn.style.top = Math.random() * 80 + "vh";
}
