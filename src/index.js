import loadHomePage from "./home.js";
import loadAboutPage from "./about.js";
import loadMenuPage from "./menu.js";
import loadReservationsPage from "./reservations.js";
import loadContactPage from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    loadHomePage();

    const homeButton = document.getElementById("homeBtn");
    const aboutButton = document.getElementById("aboutBtn");
    const menuButton = document.getElementById("menuBtn");
    const reservationsButton = document.getElementById("reservationsBtn");
    const contactButton = document.getElementById("contactBtn");

    

    homeButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadHomePage();
    });

    aboutButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadAboutPage();
    });

    menuButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadMenuPage();
    });

    reservationsButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadReservationsPage();
    });

    contactButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadContactPage();
    });
});
