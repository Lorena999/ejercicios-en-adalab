'use strict';

const input = document.querySelector('.js-input');
const text = document.querySelector('.js-name');

function handlerKey () {
  let nameUser = input.value;
  text.innerHTML = nameUser;
  localStorage.setItem('name', nameUser);
}
const savedName = localStorage.getItem('name');
if(savedName !== '') {
   input.value = savedName;
   text.innerHTML = savedName;
}

input.addEventListener('keyup', handlerKey);