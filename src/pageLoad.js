function loadHomePage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Welcome to Delightful Bites";

    const image = document.createElement("img");
    image.src = "restaurant.jpg";
    image.alt = "A cosy restaurant interior";

    const taglineOne = document.createElement("p");
    taglineOne.textContent = "Experience a world of exquisite flavours and a warm ambiance at Delightful Bites. Our chefs bring the finest ingredients together to craft dishes that will leave you craving for more.";

    const taglineTwo = document.createElement("p");
    taglineTwo.textContent = "Visit us for an unforgettable dining experience!";

    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(taglineOne);
    content.appendChild(taglineTwo);



}

export default loadHomePage;