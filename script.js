const targetDate = new Date("October 11, 2025 23:59:59").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerText = "🎉 Es ist soweit!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerText =
    `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();
