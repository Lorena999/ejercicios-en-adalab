'use strict';

const input = document.querySelector('.js-input');
const input2 = document.querySelector('.js-input2');
const form = document.querySelector('.js-form');
const text = document.querySelector('.js-name');

function handlerKey () {
  let nameUser = input.value;
  let firstName = input2.value;
  text.innerHTML = nameUser + ' ' + firstName;
  
  localStorage.setItem('name', nameUser);
  localStorage.setItem('firstname', firstName);
}
const savedName = localStorage.getItem('name');
const savedLastName = localStorage.getItem('firstname');
if(savedName !== '' && savedLastName !== '') {
   input.value = savedName;
   input2.value = savedLastName;
   text.innerHTML = savedName + ' ' + savedLastName;
}

form.addEventListener('keyup', handlerKey);