
document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll("[data-subscribe]").forEach(function (button) {

    button.addEventListener("click", function () {

      if (typeof fbq === "function") {
        fbq("track", "Subscribe");
      }

    });

  });

  var year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

});
