'use strict'

const button = document.querySelector('.js-button');
const button2 = document.querySelector('.js-button2');

function buttonClick (event) {
    const selectedButton = event.currentTarget;
    selectedButton.classList.toggle('clickbutton');

}
button.addEventListener('click', buttonClick);
button2.addEventListener('click', buttonClick);