import { SUV, Truck, Car } from "./car.js";

const lexusRX = new SUV(
  "Lexus",
  "RX Series",
  2022,
  2852,
  "./images/lexusRX.image.jpg"
);
const toyotaHighlander = new SUV(
  "Toyota",
  "Highlander",
  2022,
  2838,
  "./images/toyotaHighlander.image.jpg"
);
const dodgeRam = new Truck(
  "Dodge",
  "RAM 1500 Series",
  2022,
  1977,
  "./images/dodgeRam.image.jpg"
);
const hondaCRV = new SUV(
  "Honda",
  "CR-V",
  2020,
  1488,
  "./images/hondaCRV.image.jpg"
);
const rangeRover = new SUV(
  "Land Rover",
  "Range Rover Series",
  2020,
  1411,
  "./images/rangeRover.image.jpg"
);
const chevyYukon = new SUV(
  "Chevrolet/GMC",
  "Suburban/Yukon/Tahoe Series",
  2023,
  1136,
  "./images/chevyYukon.image.jpg"
);
const jeepWrangler = new SUV(
  "Jeep",
  "Wrangler",
  2023,
  1106,
  "./images/jeepWrangler.image.jpg"
);
const toyotaRAV4 = new SUV(
  "Toyota",
  "RAV4",
  2021,
  999,
  "./images/toyotaRAV4.image.jpg"
);
const hondaCivic = new Car(
  "Honda",
  "Civic",
  2019,
  734,
  "Car",
  "./images/hondaCivic.image.jpg"
);
const fordF150 = new Truck(
  "Ford",
  "F150 Series",
  2022,
  557,
  "./images/fordF150.image.jpg"
);

console.log(lexusRX);
lexusRX.displayStolentDetails();
lexusRX.suvRiskAlert();

console.log(toyotaHighlander);
toyotaHighlander.displayStolentDetails();
toyotaHighlander.suvRiskAlert();

console.log(dodgeRam);
dodgeRam.displayStolentDetails();
dodgeRam.truckRiskAlert();

console.log(hondaCRV);
hondaCRV.displayStolentDetails();
hondaCRV.suvRiskAlert();

console.log(rangeRover);
rangeRover.displayStolentDetails();
rangeRover.suvRiskAlert();

console.log(chevyYukon);
chevyYukon.displayStolentDetails();
chevyYukon.suvRiskAlert();

console.log(jeepWrangler);
jeepWrangler.displayStolentDetails();
jeepWrangler.suvRiskAlert();

console.log(toyotaRAV4);
toyotaRAV4.displayStolentDetails();
toyotaRAV4.suvRiskAlert();

console.log(hondaCivic);
hondaCivic.displayStolentDetails();

console.log(fordF150);
fordF150.displayStolentDetails();
fordF150.truckRiskAlert();
