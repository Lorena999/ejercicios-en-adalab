"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 1;

const avocadosNumber =
  money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
console.log(avocadosNumber);

money >= avocadoPrice ? (avocados = money / avocadoPrice) : 0;
console.log(avocados);

/*if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}*/
