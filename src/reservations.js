export default function loadReservationsPage() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Reservations";

    const description = document.createElement("p");
    description.textContent = "Reserve a table for a delightful dining experience. Call us or book online!";

    const phone = document.createElement("p");
    phone.textContent = "📞 Call us: +44 123 456 789";

    const form = document.createElement("form");

    const label = document.createElement("label");
    label.textContent = "Select Date & Time:";
    label.setAttribute("for", "datetime");

    const input = document.createElement("input");
    input.type = "datetime-local";
    input.id = "datetime";
    input.name = "datetime"

    const button = document.createElement("button");
    button.textContent = "Reserve Now";
    button.type = "submit";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(button);

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(phone);
    content.appendChild(form);
}