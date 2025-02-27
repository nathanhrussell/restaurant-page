import loadHomePage from "./home.js";
import loadAboutPage from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");

    loadHomePage();

    const homeButton = document.getElementById("homeBtn");
    const aboutButton = document.getElementById("aboutBtn");

    homeButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadHomePage();
    });

    aboutButton.addEventListener("click", () => {
        content.innerHTML = "";
        loadAboutPage();
    });
});
