function loadAboutPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const aboutText = document.createElement("div");
    aboutText.innerHTML = 
    `<h1>About Delightful Bites</h1>
    <p>At <strong>Delightful Bites</strong>, we believe that great food brings people together.</p>
    <p>Nestled in the heart of the city, our restaurant offers a warm and inviting atmosphere where every meal is crafted with passion and care.</p>
    <p>Our menu is a celebration of fresh, locally sourced ingredients, expertly prepared to deliver a perfect balance of flavour and presentation.</p>
    <p>Whether you're joining us for a leisurely breakfast, a hearty lunch, or an elegant dinner, every dish is designed to delight your taste buds.</p>
    <p>Our chefs take inspiration from both traditional and modern cuisine, ensuring that every plate showcases bold flavours and the finest ingredients.</p>
    <p>From comforting classics to innovative creations, there’s something for everyone at Delightful Bites.</p>
    <p>We take pride in delivering not just exceptional food, but also outstanding service.</p>
    <p>Whether you're here for a casual meal with friends, a special occasion, or simply a moment to savour good food, we strive to make every visit memorable.</p>
    <p>Join us at <strong>Delightful Bites</strong> and experience the joy of great food, warm hospitality, and unforgettable moments.</p>
`;

    content.appendChild(aboutText);
}

export default loadAboutPage;
