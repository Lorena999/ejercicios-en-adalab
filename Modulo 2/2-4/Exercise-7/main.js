"use strict";

const number = getEl(".js-num");
const numberValue = parseInt(number.innerHTML);

function getEl(sel) {
  const selector = document.querySelector(sel);
  if (selector === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${sel}`;
  } else {
    return document.querySelector(sel);
  }
}

function even(a) {
  if (a % 2 === 0) {
    return "El número introducido es par";
  } else {
    return "El número instroducido en impar";
  }
}

const resultEven = even(numberValue);
console.log(resultEven);
