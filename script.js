
document.addEventListener("DOMContentLoaded", function () {

  // Current year
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Telegram button click tracking
  document.querySelectorAll("[data-subscribe]").forEach(function (button) {

    button.addEventListener("click", function () {

      if (typeof window.fbq === "function") {
        window.fbq("track", "Subscribe");
      }

    });

  });

});
