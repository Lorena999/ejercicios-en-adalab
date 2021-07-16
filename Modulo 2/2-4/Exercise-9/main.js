"use strict";
//practise arrow functions

// modificamos una variable de ámbito global
/*let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}*/

// arrow fuction
let secretLetter = "y";
const mySecretLetter = () => {
  secretLetter = "x";
  return secretLetter;
};
console.log(secretLetter);
console.log(mySecretLetter());

/*function mult(a, b) {
  return a * b;
}*/

// arrow fuction
const mult = (a, b) => a * b;

let multResult = mult(6, 3);
console.log(multResult);

/*function media(a, b, c, d) {
  return (a + b + c + d) / 4;
}*/
// arrow fuction
const media = (a, b, c, d) => a + b + c + d;
let mediaResult = media(2, 3, 4, 5);
console.log(mediaResult);

/*
function taxIva (price) {
  const iva = price * 0.21;
  const priceTotal = price + iva;
  return `El precio sin IVA es: ${price} , el IVA es: ${iva}, y el total es: ${priceTotal}`;
};*/

// arrow fuction
const price = 1000;
const taxIVA = (price) => {
  const iva = price * 0.21;
  const priceTotal = price + iva;
  return `El precio sin IVA es: ${price} , el IVA es: ${iva}, y el total es: ${priceTotal}`;
};
