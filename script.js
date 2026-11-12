document.addEventListener("DOMContentLoaded", function () {

    // Telegram Subscribe Button Tracking
    const telegramButtons = document.querySelectorAll("[data-subscribe]");

    telegramButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            if (typeof window.fbq === "function") {

                window.fbq("track", "Subscribe");

            }

        });

    });

});
