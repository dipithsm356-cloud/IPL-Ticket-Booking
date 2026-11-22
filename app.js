
// ===================================
// ACTIVITY 5 - JAVASCRIPT
// IPL TICKET BOOKING
// ===================================

// 1. Reusable Toast Notification Function

function showToast(message) {

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;

    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");

    clearTimeout(toast.timer);

    toast.timer = setTimeout(function () {
        toast.classList.remove("show");
    }, 3000);
}


// 2. Smooth Scrolling Function

document.addEventListener("DOMContentLoaded", function () {

    const bookButtons = document.querySelectorAll('a[href="#booking"], .book-btn');

    bookButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const bookingSection = document.getElementById("booking");

            if (bookingSection) {

                event.preventDefault();

                bookingSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                showToast("Taking you to the IPL booking section!");
            }
        });
    });

});
