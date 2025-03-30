export function Menu() {
  const divElement = document.createElement("div");
  divElement.classList.add("menu-content");
  divElement.style.cssText =
    "display: flex; flex-direction: column; align-items: center; gap: 3rem; padding: 2rem;";

  const contentElement = document.querySelector("#content");
  contentElement.appendChild(divElement);

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Menu";
  divElement.appendChild(h2Element);

  const appetizersHeader = document.createElement("ul");
  appetizersHeader.textContent = "Appetizers:";
  appetizersHeader.style.cssText = "font-weight: bolder;";
  divElement.appendChild(appetizersHeader);
  const appetizers = [
    "Chocobo Wings – Crispy, golden wings with a secret spice blend.",
    "Birdsong Salad – Fresh greens tossed with a tangy vinaigrette and topped with roasted nuts.",
  ];
  appetizers.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.fontWeight = "normal";
    appetizersHeader.appendChild(listItem);
  });

  const mainDishesHeader = document.createElement("ul");
  mainDishesHeader.textContent = "Main Dishes:";
  mainDishesHeader.style.cssText = "font-weight: bolder;";
  divElement.appendChild(mainDishesHeader);
  const mainDishes = [
    "Fat Chocobo Burger – A juicy, succulent burger with all the fixings.",
    "Chocobo Stew – A rich, savory stew with tender chunks of meat, vegetables, and herbs.",
    "Feathered Veggie Wrap – A wholesome wrap filled with grilled veggies, quinoa, and avocado.",
    
  ];
  mainDishes.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.fontWeight = "normal";
    mainDishesHeader.appendChild(listItem);
  });

  const dessertsHeader = document.createElement("ul");
  dessertsHeader.textContent = "Desserts:";
  dessertsHeader.style.cssText = "font-weight: bolder;";
  divElement.appendChild(dessertsHeader);
  const desserts = [
    "Fat Chocobo Burger – A juicy, succulent burger with all the fixings.",
    "Chocobo Stew – A rich, savory stew with tender chunks of meat, vegetables, and herbs.",
    "Feathered Veggie Wrap – A wholesome wrap filled with grilled veggies, quinoa, and avocado.",
    
  ];
  desserts.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.fontWeight = "normal";
    dessertsHeader.appendChild(listItem);
  });
}
