
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

// ===================================
// ACTIVITY 7 - TICKET PRICE DETAILS
// ===================================

const ticketPrices = {
    "RCB vs CSK": {
        general: 800,
        premium: 2000,
        vip: 5000
    },

    "MI vs KKR": {
        general: 1000,
        premium: 2500,
        vip: 6000
    },

    "SRH vs RCB": {
        general: 700,
        premium: 1800,
        vip: 4500
    }
};

// Select booking form elements
const matchSelect = document.getElementById("match");
const standSelect = document.getElementById("stand");
const quantityInput = document.getElementById("quantity");

// Select booking summary elements
const summaryMatch = document.getElementById("summaryMatch");
const summaryStand = document.getElementById("summaryStand");
const summaryPrice = document.getElementById("summaryPrice");
const summaryQuantity = document.getElementById("summaryQuantity");
const summaryTotal = document.getElementById("summaryTotal");

// Function to update Booking Summary

function updateBookingSummary() {

    const selectedMatch = matchSelect.value;
    const selectedStand = standSelect.value;
    const quantity = Number(quantityInput.value);

    if (!selectedMatch || !selectedStand || quantity < 1 || quantity > 10) {
        summaryMatch.textContent = selectedMatch || "Not Selected";
        summaryStand.textContent = selectedStand || "Not Selected";
        summaryPrice.textContent = "₹0";
        summaryQuantity.textContent = quantity || "0";
        summaryTotal.textContent = "₹0";
        return;
    }

    const price = ticketPrices[selectedMatch][selectedStand];
    const total = price * quantity;

    summaryMatch.textContent = selectedMatch;
    summaryStand.textContent = selectedStand;
    summaryPrice.textContent = "₹" + price;
    summaryQuantity.textContent = quantity;
    summaryTotal.textContent = "₹" + total;

    showToast("Booking summary updated!");
}

// Listen for changes in booking form

matchSelect.addEventListener("change", updateBookingSummary);

standSelect.addEventListener("change", updateBookingSummary);

quantityInput.addEventListener("input", updateBookingSummary);

// ACTIVITY 8 - HAMBURGER MENU

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    mainNav.classList.toggle("active");
});

// Close menu after clicking a navigation link
const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("active");
    });
});

// ACTIVITY 8 - FILTER MATCHES BY TEAM

const teamFilter = document.getElementById("teamFilter");
const matchCards = document.querySelectorAll(".match-card");

teamFilter.addEventListener("change", function () {

    const selectedTeam = teamFilter.value;

    matchCards.forEach(function (card) {

        if (
            selectedTeam === "" ||
            card.dataset.team.includes(selectedTeam)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});

// ACTIVITY 8 - GRID AND LIST VIEW

const matchGrid = document.getElementById("matchGrid");
const gridView = document.getElementById("gridView");
const listView = document.getElementById("listView");

// Grid View
gridView.addEventListener("click", function () {
    matchGrid.classList.remove("list-view");
});

// List View
listView.addEventListener("click", function () {
    matchGrid.classList.add("list-view");
});
