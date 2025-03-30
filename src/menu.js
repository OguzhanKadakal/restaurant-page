export function Menu() {
  const divElement = document.createElement("div");
  divElement.classList.add("menu-content");
  divElement.style.cssText =
    "display: flex; flex-direction: column; align-items: strech; gap: 3rem; padding: 2rem;";

  const contentElement = document.querySelector("#content");
  contentElement.appendChild(divElement);

  const h2Element = document.createElement("h2");
  h2Element.textContent = "Menu";
  h2Element.style.cssText = "text-align: center; font-size: 2.5rem"
  divElement.appendChild(h2Element);

  const appetizersHeader = document.createElement("ul");
  appetizersHeader.textContent = "Appetizers:";
  appetizersHeader.style.cssText = "font-weight: bolder; font-size: 1.25rem";
  divElement.appendChild(appetizersHeader);
  const appetizers = [
    "Chocobo Wings – Crispy, golden wings with a secret spice blend.",
    "Birdsong Salad – Fresh greens tossed with a tangy vinaigrette and topped with roasted nuts.",
  ];
  appetizers.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.fontWeight = "normal";
    listItem.style.fontSize = "1rem";
    listItem.style.padding = "0.5rem";
    appetizersHeader.appendChild(listItem);
  });

  const mainDishesHeader = document.createElement("ul");
  mainDishesHeader.textContent = "Main Dishes:";
  mainDishesHeader.style.cssText = "font-weight: bolder; font-size: 1.25rem";
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
    listItem.style.fontSize = "1rem";
    listItem.style.padding = "0.5rem";
    mainDishesHeader.appendChild(listItem);
  });

  const dessertsHeader = document.createElement("ul");
  dessertsHeader.textContent = "Desserts:";
  dessertsHeader.style.cssText = "font-weight: bolder; font-size: 1.25rem";
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
    listItem.style.fontSize = "1rem";
    listItem.style.padding = "0.5rem";
    dessertsHeader.appendChild(listItem);
  });

  const specialtyDrinksHeader = document.createElement("ul");
  specialtyDrinksHeader.textContent = "Specialty Drinks:";
  specialtyDrinksHeader.style.cssText = "font-weight: bolder; font-size: 1.25rem";
  divElement.appendChild(specialtyDrinksHeader);
  const specialtyDrinks = [
    "Chocobo Cooler – A refreshing, fruity mocktail with a splash of lime.",
    "Choco Latte – Rich coffee with a smooth chocolate twist.",
  ];
  specialtyDrinks.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.style.fontWeight = "normal";
    listItem.style.fontSize = "1rem";
    listItem.style.padding = "0.5rem";
    specialtyDrinksHeader.appendChild(listItem);
  });
}
