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

    const carContainer = document.createElement("div");
    carContainer.classList.add("car-container");

    const carImage = document.createElement("img");
    console.log("Image Path for", this.brand, this.model, ":", this.image);
    carImage.src = this.image;
    carImage.alt = `${this.brand} ${this.model}`;

    const carText = document.createElement("p");

    const theftCount = document.createElement("span");
    theftCount.classList.add("theft-count");
    theftCount.textContent = `${this.thefts}`;

    carText.innerHTML = `The ${this.year} ${this.brand} ${this.model} (${this.type}) has been stolen `;
    carText.appendChild(theftCount);
    carText.innerHTML += ` times.`;

    carContainer.appendChild(carImage);
    carContainer.appendChild(carText);

    li.appendChild(carContainer);
    ul.appendChild(li);

    // Animate the newly added car details using GSAP with ScrollTrigger
    gsap.from(li, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: li,
        start: "top 50%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }
}

class SUV extends Car {
  constructor(brand, model, year, thefts, image) {
    super(brand, model, year, thefts, "SUV", image);
  }

  suvRiskAlert() {
    let ul = document.querySelector("#stolenCarList");
    let li = document.createElement("li");

    li.classList.add("alert");

    li.textContent = `ALERT: The ${this.year} ${this.brand} ${this.model} is a high-risk stolen SUV!`;
    ul.appendChild(li);

    gsap.from(li, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: li,
        start: "top 80%",
        end: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }
}

class Truck extends Car {
  constructor(brand, model, year, thefts, image) {
    super(brand, model, year, thefts, "Truck", image);
  }

  truckRiskAlert() {
    let ul = document.querySelector("#stolenCarList");

    if (!ul) {
      console.error(
        "The element with ID 'stolenCarList' was not found in the DOM."
      );
      return;
    }

    let li = document.createElement("li");

    li.classList.add("warning");
    li.textContent = `WARNING: Stolen ${this.year} ${this.brand} ${this.model} trucks are high-risk stolen.`;

    ul.appendChild(li);

    gsap.from(li, {
      duration: 1,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      scrollTrigger: {
        trigger: li,
        start: "top 90%",
        end: "top 75%",
        toggleActions: "play none none none",
      },
    });
  }
}

export { Car, SUV, Truck };
