import "./styles.css";
import { Homepage} from "./home.js";
import { Menu} from "./menu.js";

function setupNavigation(contentElement) {
    let render = Homepage();
  
    const homeBtn = document.querySelector("#home");
    const menuBtn = document.querySelector("#menu");
  
    homeBtn.addEventListener("click", () => {
      contentElement.innerHTML = "";
      render = Homepage();
    });
  
    menuBtn.addEventListener("click", () => {
      contentElement.innerHTML = "";
      render = Menu();
    });
  }
  const contentElement = document.querySelector("#content");
  setupNavigation(contentElement);