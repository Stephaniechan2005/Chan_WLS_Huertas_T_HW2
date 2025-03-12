import { SUV, Truck, Car } from "./car.js";

const lexusRX = new SUV("Lexus", "RX Series", 2022, 2852);
const toyotaHighlander = new SUV("Toyota", "Highlander", 2022, 2838);
const dodgeRam = new Truck("Dodge", "RAM 1500 Series", 2022, 1977);
const hondaCRV = new SUV("Honda", "CR-V", 2020, 1488);
const rangeRover = new SUV("Land Rover", "Range Rover Series", 2020, 1411);
const chevyYukon = new SUV(
  "Chevrolet/GMC",
  "Suburban/Yukon/Tahoe Series",
  2023,
  1136
);
const jeepWrangler = new SUV("Jeep", "Wrangler", 2023, 1106);
const toyotaRAV4 = new SUV("Toyota", "RAV4", 2021, 999);
const hondaCivic = new Car("Honda", "Civic", 2019, 734, "Car");
const fordF150 = new Truck("Ford", "F150 Series", 2022, 557);

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
