class Car {
  constructor(brand, model, year, thefts, type) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.thefts = thefts;
    this.type = type;
  }

  displayStolentDetails() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");
    li.textContent = `The ${this.year} ${this.make} ${this.model} (${this.type}) has been stolen ${this.thefts} times.`;
    ul.appendChild(li);
  }
}

class SUV extends Car {
  constructor(brand, model, year, thefts) {
    super(brand, model, year, thefts, "SUV");
  }
  suvRiskAlert() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");
    li.textContent = `ALERT: The ${this.year} ${this.make} ${this.model} is a high-risk stolen SUV!`;
    ul.appendChild(li);
  }
}

class Truck extends Car {
  constructor(brand, model, year, thefts) {
    super(brand, model, year, thefts, "Truck");
  }
  truckRiskAlert() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");
    li.textContent = `Warning: Stolen ${this.year} ${this.make} ${this.model} trucks high-risk stolen.`;
    ul.appendChild(li);
  }
}
export { Car, SUV, Truck };
