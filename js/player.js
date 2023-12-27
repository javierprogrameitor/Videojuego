
import { GameObject } from "./gameObject.js";

export class Player extends GameObject {
  playerSpeed = 15;

  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.setElement();
  }

  setElement() {

    this.playerElement = document.createElement("div");
    this.playerElement.classList.toggle("player");
    this.playerElement.style.width = this.width + "px";
    this.playerElement.style.height = this.height + "px";
    this.playerElement.style.backgroundImage = `url("./img/derecha.png")`;
  }

  getElement() {
    return this.playerElement;
  }
  
}
