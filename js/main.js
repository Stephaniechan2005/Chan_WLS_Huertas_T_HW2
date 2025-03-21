import { SUV, Truck, Car } from "./car.js";

const lexusRXImg = new URL("../images/lexusRX.jpg", import.meta.url).href;
const toyotaHighlanderImg = new URL(
  "../images/toyotaHighlander.image.jpg",
  import.meta.url
).href;
const dodgeRamImg = new URL("../images/dodgeRam.image.jpg", import.meta.url)
  .href;

const hondaCRVImg = new URL("../images/hondaCRV.image.jpg", import.meta.url)
  .href;
const rangeRoverImg = new URL("../images/rangeRover.image.jpg", import.meta.url)
  .href;

const chevyYukonImg = new URL("../images/chevyYukon.image.jpg", import.meta.url)
  .href;

const jeepWranglerImg = new URL(
  "../images/jeepWrangler.image.jpg",
  import.meta.url
).href;

const toyotaRAV4Img = new URL("../images/toyotaRAV4.image.jpg", import.meta.url)
  .href;

const hondaCivicImg = new URL("../images/hondaCivic.image.jpg", import.meta.url)
  .href;

const fordF150Img = new URL("../images/fordF150.image.jpg", import.meta.url)
  .href;

// Add stolen cars to the list

const lexusRX = new SUV("Lexus", "RX Series", 2022, 2852, lexusRXImg);
const toyotaHighlander = new SUV(
  "Toyota",
  "Highlander",
  2022,
  2838,
  toyotaHighlanderImg
);
const dodgeRam = new Truck("Dodge", "RAM 1500 Series", 2022, 1977, dodgeRamImg);
const hondaCRV = new SUV("Honda", "CR-V", 2020, 1488, hondaCRVImg);
const rangeRover = new SUV(
  "Land Rover",
  "Range Rover Series",
  2020,
  1411,
  rangeRoverImg
);
const chevyYukon = new SUV(
  "Chevrolet/GMC",
  "Suburban/Yukon/Tahoe Series",
  2023,
  1136,
  chevyYukonImg
);
const jeepWrangler = new SUV("Jeep", "Wrangler", 2023, 1106, jeepWranglerImg);
const toyotaRAV4 = new SUV("Toyota", "RAV4", 2021, 999, toyotaRAV4Img);
const hondaCivic = new Car("Honda", "Civic", 2019, 734, "Car", hondaCivicImg);
const fordF150 = new Truck("Ford", "F150 Series", 2022, 557, fordF150Img);

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
