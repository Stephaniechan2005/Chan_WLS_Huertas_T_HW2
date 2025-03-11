class Guitar {
  constructor(brand, model, color, strings, pickups) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.strings = strings;
    this.pickups = pickups;
  }

  strum() {
    let p = document.createElement("p");
    p.textContent = `${this.strings} strings are strumming on this ${this.brand} ${this.model} guitar.`;
    document.body.appendChild(p);
  }
}

class BassGuitar extends Guitar {
  constructor() {
    super("Fender", "Jazzmaster", "Black", 4, "62 Precision bass pickups");
  }
  slapDaBass() {
    let p = document.createElement("p");
    p.textContent = `slappin' ${this.strings} bass on this ${this.brand} ${this.model} bass`;
    document.body.appendChild(p);
  }
}

class keytar extends Guitar {
  constructor(brand, model, color, keys) {
    super(brand, model, color);
    this.keys = keys;
  }
  slide() {
    let p = document.createElement("p");
    p.textContent = `sliding my fingers across ${this.keys} keys on my ${this.brand} ${this.model} keytar.`;
    document.body.appendChild(p);
  }
}
export { Guitar, BassGuitar, keytar };
