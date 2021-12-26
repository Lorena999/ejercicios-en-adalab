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
const taxIVA = (price) => {
  const iva = price * 0.21;
  const priceTotal = price + iva;
  return `El precio sin IVA es: ${price} , el IVA es: ${iva}, y el total es: ${priceTotal}`;
};
console.log(taxIVA(1200));

/*function even(a) {
  if (a % 2 === 0) {
    return "El número introducido es par";
  } else {
    return "El número instroducido en impar";
  }
};*/

// arrow fuction
const even = (a) => {
  if (a % 2 === 0) {
    return "El número introducido es par";
  } else {
    return "El número instroducido en impar";
  }
};

console.log(even(2398074));

// arrow fuction 2
const even2 = (a) => (a % 2 === 0 ? true : false);
console.log(even2(14));

/*function getEl(sel) {
  const selector = document.querySelector(sel);
  if (selector === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${sel}`;
  } else {
    return document.querySelector(sel);
  }
};*/
// arrow fuction
const getEl = (sel) => {
  const selector = document.querySelector(sel);
  if (selector === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${sel}`;
  } else {
    return document.querySelector(sel);
  }
};
console.log(getEl(".js-title"));
