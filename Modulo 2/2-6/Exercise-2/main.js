'use strict'

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};

adalaber1.run = phrase => `Estoy ${phrase}`;
console.log(adalaber1.run ('corriendo'));

adalaber1.runAMarathon = distance => `Estoy corriendo un maratón de ${distance} kilómetros`;
console.log(adalaber1.runAMarathon (50));