"use strict";
const a = 1235;

function even(a) {
  if (a % 2 === 0) {
    return "El número introducido es par";
  } else {
    return "El número instroducido en impar";
  }
}
const result = even(a);
console.log(result);

const pair = a % 2 === 0 ? true : false;
console.log(pair);
