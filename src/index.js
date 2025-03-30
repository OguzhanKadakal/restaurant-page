import "./styles.css";
import { Homepage } from "./home.js";
import { Menu } from "./menu.js";
import { Contact } from "./contact.js";

function setupNavigation(contentElement) {
    let render = Homepage();
  
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
    const contactBtn = document.querySelector("#contact");
  
    homeBtn.addEventListener("click", () => {
      contentElement.innerHTML = "";
      render = Homepage();
    });
  
    menuBtn.addEventListener("click", () => {
      contentElement.innerHTML = "";
      render = Menu();
    });

    contactBtn.addEventListener("click", () => {
        contentElement.innerHTML = "";
        render = Contact();
      });
  }
  const contentElement = document.querySelector("#content");
  setupNavigation(contentElement);