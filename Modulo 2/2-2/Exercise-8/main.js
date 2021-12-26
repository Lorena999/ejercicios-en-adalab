"use strict";
const list = document.querySelector(".list");

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

list.innerHTML = ` <li>${firstDogName} <img src="${firstDogImage}"</li><li>${secondDogName} <img src="${secondDogImage}"</li><li>${thirdDogName} <img src="${thirdDogImage}"</li>`;

/*const firstDog = '<li><img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg">Dina</li>';


const secondDog = '<li><img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg">Luna</li>';


const thirdDog = '<li><img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg">Lana</li>';


list.innerHTML = `${firstDog} ${secondDog} ${thirdDog}`*/
