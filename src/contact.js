export default function loadContactPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Contact Us";

    const address = document.createElement("p");
    address.textContent = "📍 123 London Road, London, UK";

    const phone = document.createElement("p");
    phone.textContent = "📞 Call us: +44 123 456 789";

    const email = document.createElement("p");
    email.textContent = "📧 Email: contact@delightfulbites.com";
    
    const hours = document.createElement("p");
    hours.textContent = "⏰ Opening Hours: Monday - Sunday, 12:00 PM to 10:00 PM";

    content.appendChild(title);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);
    content.appendChild(hours);

}
