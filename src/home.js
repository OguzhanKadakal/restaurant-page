export function Homepage() {
    const divElement = document.createElement("div");
    divElement.classList.add("home-content");

    const contentElement = document.getElementById("content");
    contentElement.appendChild(divElement);

    const h2Element = document.createElement("h2");
    h2Element.classList.add("home-title");
    h2Element.textContent = "Welcome to Fat Chocobo";

    const pElement1 = document.createElement("p");
    pElement1.textContent = "At Fat Chocobo, we serve up hearty meals and delightful treats inspired by the legendary Chocobo. Whether you're craving comforting classics or exciting new flavors, our goal is to provide a truly indulgent experience for all our guests.";

    const pElement2 = document.createElement("p");
    pElement2.textContent = "Explore our website to see our delicious Menu or get in touch with us via the Contact page. At Fat Chocobo, we believe in bringing joy to every meal, so come hungry and leave satisfied!";

    const pElement3 = document.createElement("p");
    pElement3.textContent = "Thanks for stopping by—we can’t wait to welcome you!";

    pElement1.classList.add("home-p");
    pElement2.classList.add("home-p");
    pElement3.classList.add("home-p");

    divElement.appendChild(h2Element);
    divElement.appendChild(pElement1);
    divElement.appendChild(pElement2);
    divElement.appendChild(pElement3);
}


