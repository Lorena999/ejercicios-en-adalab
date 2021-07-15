let ageDog = 9;
const ageHuman2 = 24 + (ageDog - 2) * 5;

if (ageDog === 1) {
  ageHuman = 15;
  console.log(
    `La edad de tu perro es de ${ageDog} año, lo que equivale a ${ageHuman} años de humano.`
  );
} else if (ageDog === 2) {
  ageHuman = 24;
  console.log(
    `Tu perro tiene ${ageDog} años, que equivalen a ${ageHuman} años de humano.`
  );
} else if (ageDog >= 3) {
  console.log(
    `Tu perro tiene ${ageDog} años, que equivalen a ${ageHuman2} años de humano.`
  );
}
