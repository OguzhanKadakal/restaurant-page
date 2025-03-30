export function Contact() {
    const divElement = document.createElement("div");
    divElement.classList.add("contact-content")
    divElement.style.cssText = ("display: flex; flex-direction: column; align-items: strech; gap: 2rem;");

    const contentElement = document.querySelector("#content");
    contentElement.appendChild(divElement);

    const h2Element = document.createElement("h2");
    h2Element.textContent = "Get in touch with Fat Chocobo";
    h2Element.style.cssText = "text-align: center; font-size: 2.5rem";
    divElement.appendChild(h2Element);

    const pElement = document.createElement("p");
    pElement.textContent = "Have questions? Want to make a reservation? Or just want to chat about your favorite dish? We’re here to help!";
    pElement.style.cssText = "text-align: center; font-size: 1.3rem; font-weight: normal";
    divElement.appendChild(pElement);
    
    const ulElement = document.createElement("ul");
    divElement.appendChild(ulElement);

    const contactList = [
        "Phone: +123456789",
        "Email: contact@fat.chocobo",
        "Address: Fat Chocobo’s Roost, Chocobo Sanctuary",
    ]
    contactList.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.style.fontWeight = "normal";
        listItem.style.fontSize = "2rem";
        listItem.style.padding = "1rem";
        ulElement.appendChild(listItem);
    })
}