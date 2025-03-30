export function Contact() {
    const divElement = document.createElement("div");
    divElement.classList.add("contact-content")
    divElement.style.cssText = ("display: flex; flex-direction: column align-items: strech;");

    const contentElement = document.querySelector("#content");
    contentElement.appendChild(divElement);

    const h2Element = document.createElement("h2");
    h2Element.textContent = "Get in touch with Fat Chocobo";
    h2Element.style.cssText = "text-align: center; font-size: 2.5rem";
    divElement.appendChild(h2Element);

}