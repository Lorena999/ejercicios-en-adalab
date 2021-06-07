"use strict";

let counter = -1;
let temp;

const incrementAndShowCounter = () => {
  counter++;
  const time = document.querySelector(".time");
  time.innerHTML = `Escrito hace ${counter} segundos`;
  if (counter === 60) {
    clearInterval(temp);
    time.innerHTML = `Escrito hace 1 minuto`;
  }
};

temp = setInterval(incrementAndShowCounter, 500);
