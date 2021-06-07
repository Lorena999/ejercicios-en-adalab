'use strict';

const options = ['coche', 'viaje', 'crucero', 'llavero'];
const lotteryNumberInput = document.querySelector('#lotteryNumber');

function handleLotteryNumberChange(event) {
  const input = event.currentTarget;
  const selectedNumber = parseInt(input.value);
  const ind = selectedNumber - 1; // El índice empieza en 0
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log('Premio: ', result);
}

lotteryNumberInput.addEventListener('keyup', handleLotteryNumberChange);

