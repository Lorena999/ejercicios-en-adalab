'use strict'
const list = document.querySelector(".list");


const firstDog = '<li><img src="https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg">Dina</li>';


const secondDog = '<li><img src="https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg">Luna</li>';


const thirdDog = '<li><img src="https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg">Lana</li>';


list.innerHTML = `${firstDog} ${secondDog} ${thirdDog}`;
