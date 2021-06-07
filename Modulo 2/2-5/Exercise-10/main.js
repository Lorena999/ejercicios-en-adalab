'use strict'

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

const button = document.querySelector('.js-button');
const page = document.querySelector('html');
const list = document.querySelector('.list-movies');

function clickButton () {
    page.innerHTML += `<ul>
    <li class="inception">${inception}</li>
    <li class="butterfly">${theButterFlyEffect}</li>
    <li class="sunshine">${eternalSunshineOfTheSM}</li>
    <li class="velvet">${blueVelvet}</li>
    <li class="split">${split }</li>
    </ul>`;
}
button.addEventListener('click', clickButton);

const inceptionM = document.querySelector(".inception");
const theButterFlyEffectM = document.querySelector(".butterfly");
const eternalSunshineOfTheSMM = document.querySelector(".sunshine");
const blueVelvetM = document.querySelector(".velvet");
const splitM = document.querySelector(".split");

function handlerMovies (event) {
    console.log(event.currentTarget.innerHTML);
}
inceptionM.addEventListener('click', handlerMovies);
theButterFlyEffectM.addEventListener('click', handlerMovies);
eternalSunshineOfTheSMM.addEventListener('click', handlerMovies);
blueVelvetM.addEventListener('click', handlerMovies);
splitM.addEventListener('click', handlerMovies);

