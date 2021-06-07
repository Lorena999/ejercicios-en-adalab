'use strict'

const userAge = document.querySelector('.user__age');
const hoursLife = (24*366) * parseInt(userAge.innerHTML);
console.log(`Has vivido ${hoursLife} horas en tu vida`);
