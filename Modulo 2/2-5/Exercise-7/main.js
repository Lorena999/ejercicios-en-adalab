'use strict'

const button = document.querySelector('.js-button');

function buttonClick () {
    button.classList.toggle('clickbutton');
}
button.addEventListener('click', buttonClick);