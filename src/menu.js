export default function loadMenuPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Our Menu";

    const description = document.createElement("p");
    description.textContent = "Explore our delicious selection of dishes, carefully crafted with the finest ingredients.";

    const menuList = document.createElement("ul");

    const items = [
        "Starter: Garlic Bread",
        "Starter: Tomato Bruschetta",
        "Main: Grilled Salmon with Lemon Butter",
        "Main: Handmade Truffle Pasta",
        "Dessert: Classic Tiramisu",
        "Dessert: Chocolate Lava Cake",
    ];

    items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(menuList);
}
