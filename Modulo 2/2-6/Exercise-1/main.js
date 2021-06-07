'use strict'

const adalaber1 = {
  name: 'Susana',
  age: 34,
  job: 'periodista',
};

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',
};

const page = document.querySelector('html');

page.innerHTML += (`Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.job}.`);

page.innerHTML += (`Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`);
