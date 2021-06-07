'use strict'

const title = document.querySelector('.js-txt');
const button = document.querySelector('.js-button');

function changeTitle(){
  title.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

button.addEventListener('click', changeTitle);