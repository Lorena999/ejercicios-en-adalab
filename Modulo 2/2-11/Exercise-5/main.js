'use strict';

const form = document.querySelector('.js-form');
const content = document.querySelector('.js-content');


function backcolors (event) {
  const choose = event.target.value;
 
  if (choose === 'lightcolor') {
    content.classList.remove('dark');
    content.classList.add('light');
  } else {
    content.classList.remove('light');
    content.classList.add('dark');
  }
  localStorage.setItem('backcolors', choose);
}
let savedBackcolor = localStorage.getItem('backcolors');
if(savedBackcolor === 'light') {
  content.classList.remove('dark');
  content.classList.add('light');
}else {
  content.classList.remove('light');
  content.classList.add('dark');
}

form.addEventListener('click', backcolors);
