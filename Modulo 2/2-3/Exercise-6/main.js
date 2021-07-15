"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 100;

const avocadosNumber =
  money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
console.log(avocadosNumber);

/*if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/
