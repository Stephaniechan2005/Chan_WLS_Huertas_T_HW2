import { Guitar, BassGuitar, keytar } from "./guitar.js";

const fenderStart = new Guitar(
  "Fender",
  "Stratocaster",
  "Ocean Blue",
  6,
  "hummbucker"
);

const whiteFalcon = new Guitar("Gretsch", "Falcon", "White", 12, "Filtertron");

console.log(fenderStart);
fenderStart.strum();

console.log(whiteFalcon);
whiteFalcon.strum();

const presisionBass = new BassGuitar();
console.log(presisionBass);
presisionBass.strum();
presisionBass.slapDaBass();

const alesis = new keytar("Alesis", "Vortex", "Black", 49);
console.log(alesis);
alesis.slide();
