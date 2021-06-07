'use strict'
const button = document.querySelector('.js-button');

const handleButton = function(ev) {
  console.dir(ev);
};

button.addEventListener('click', handleButton);