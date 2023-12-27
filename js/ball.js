import { GameObject } from "./gameObject.js";
import { setCustomProperty } from "./updateProperties.js";

export class Ball extends GameObject {
  speedX = 3;
  speedY = 3;
  isDivisible = true;
  imagenes = [
    './img/enemyBlue.png',
    './img/enemyRed.png',
    './img/enemyPurple.png',
    './img/enemyGreen.png',
  ];

  constructor(x, y, height, width, gameBoardElement) {
    super(x, y, height, width);
    this.gameBoardElement = gameBoardElement;
    this.setElement();
  }

  setElement() {
    this.ballElement = document.createElement("div");
    this.ballElement.classList.add("ball");
    setCustomProperty(this.ballElement, "height", this.height + "px");
    setCustomProperty(this.ballElement, "width", this.width + "px");


    const randomImageIndex = Math.floor(Math.random() * this.imagenes.length);
    const randomImage = this.imagenes[randomImageIndex];

  
    this.ballElement.style.backgroundImage = `url(${randomImage})`;
  }

  getElement() {
    return this.ballElement;
  }
}