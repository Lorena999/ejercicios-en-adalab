'use strict';

const buttonUpdate = document.querySelector('.js-button');
const select = document.querySelector('.js-type-face');
const faceStatus = document.querySelector('.js-face-status');
const mainElement = document.querySelector('.js-main');

function refreshFace () {
  const selectFace = select.value;
  if (selectFace === 'happy-face') {
    faceStatus.innerHTML = `:)`;
  }
  else {
    faceStatus.innerHTML = `:(`;
  }
}

function generateRandomNumber() {
  const number = Math.round ( Math.random() * 100 );
  return number;
}

function removeBackgroundClass() {
  mainElement.classList.remove('main-correct-yellow'); 
  mainElement.classList.remove('main-correct-orange');
}

function addNewBackground () {
  const Randomnumber = generateRandomNumber();
  if (Randomnumber % 2 === 0) {
    mainElement.classList.add('main-correct-yellow');
  } else {
    mainElement.classList.add('main-correct-orange');
  }
}

function refreshBacground() {
  const number = generateRandomNumber();
  removeBackgroundClass();
  addNewBackground(number);
}

function handleClicButton () {
  refreshFace();
  refreshBacground();
}
buttonUpdate.addEventListener('click', handleClicButton);
