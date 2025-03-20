class Car {
  constructor(brand, model, year, thefts, type, image) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.thefts = thefts;
    this.type = type;
    this.image = image;
  }

  displayStolentDetails() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");

    // Create a container div for the car details
    const carContainer = document.createElement("div");
    carContainer.classList.add("car-container"); // Add a class for styling

    // Create image element
    const carImage = document.createElement("img");
    carImage.src = this.image;
    carImage.alt = `${this.brand} ${this.model}`;

    // Create text content
    const carText = document.createElement("p");

    // Wrap the theft count in a span for styling
    const theftCount = document.createElement("span");
    theftCount.classList.add("theft-count"); // Add a class for styling
    theftCount.textContent = `${this.thefts}`;

    // Add the text with the theft count
    carText.innerHTML = `The ${this.year} ${this.brand} ${this.model} (${this.type}) has been stolen `;
    carText.appendChild(theftCount);
    carText.innerHTML += ` times.`;

    // Append elements to the container div
    carContainer.appendChild(carImage);
    carContainer.appendChild(carText);

    // Append the container div to the <li>
    li.appendChild(carContainer);

    // Append the <li> to the <ul>
    ul.appendChild(li);
  }
}

class SUV extends Car {
  constructor(brand, model, year, thefts, image) {
    super(brand, model, year, thefts, "SUV", image);
  }

  suvRiskAlert() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");

    // Add a class for styling
    li.classList.add("alert");

    li.textContent = `ALERT: The ${this.year} ${this.brand} ${this.model} is a high-risk stolen SUV!`;

    // Append the alert message after the car details
    ul.appendChild(li);
  }
}

class Truck extends Car {
  constructor(brand, model, year, thefts, image) {
    super(brand, model, year, thefts, "Truck", image);
  }

  truckRiskAlert() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");

    // Add a class for styling
    li.classList.add("warning");

    li.textContent = `WARNING: Stolen ${this.year} ${this.brand} ${this.model} trucks are high-risk stolen.`;

    // Append the warning message after the car details
    ul.appendChild(li);
  }
}

export { Car, SUV, Truck };
