import { GameObject } from "./gameObject.js";
import { setCustomProperty } from "./updateProperties.js";

// Define a class called 'bullet' that extends the 'GameObject' class
export class Bullet extends GameObject {
    // Define properties for the bullet class
    bulletElement;
    speed = 3.5;
    timeLife = 5000;

    // Constructor function that initializes the bullet object
    constructor(x, y, height, width) {
        // Call the constructor of the GameObject class with the given parameters
        super(x, y, height, width);
        // Call the function to set the bullet element
        this.setBulletElement();
        console.log("pum");
    }

    // Function to create and set the bullet element
    setBulletElement() {
        // Create a new div element for the bullet
        this.bulletElement = document.createElement("div");
        // Add the class 'bullet' to the bullet element
        this.bulletElement.classList.add("bullet");

        // Set the custom properties for the bullet element
        setCustomProperty(this.bulletElement, "left", this.x + "px");
        setCustomProperty(this.bulletElement, "bottom", this.y + "px");
        setCustomProperty(this.bulletElement, "height", this.height + "px");
        setCustomProperty(this.bulletElement, "width", this.width + "px");
        this.bulletElement.style.backgroundImage = `url("./img/bullet.png")`;
        // Set a timeout function to remove the bullet element after a specified time
        setTimeout(() => {
            this.bulletElement.remove();
        }, this.timeLife);
    }

    // Function to retrieve the bullet element
    getElement() {
        return this.bulletElement;
    }

    // This method updates the bullet's position by adjusting its vertical position.
    updateBullet() {
        this.y = this.y + this.speed;
        setCustomProperty(this.bulletElement, "bottom", this.y + "px");
    }
}
