'use strict';

const imgCity = document.querySelector('.img-city');
const img = document.createElement('img');
imgCity.appendChild(img);
img.src = 'https://www.miradormadrid.com/wp-content/uploads/2016/01/Madrid-de-noche-16.jpg';


const madrid = document.querySelector('.js-madrid');
const paris = document.querySelector('.js-paris');
const nuevaYork = document.querySelector('.js-nuevayork');
const select = document.querySelector('.js-select');
const form = document.querySelector('.js-form');
console.log(imgCity);

/*madrid.src = 'https://www.miradormadrid.com/wp-content/uploads/2016/01/Madrid-de-noche-16.jpg';
paris.src = 'https://i.pinimg.com/originals/5f/66/9f/5f669f631f9d036142f1dcbd87459477.jpg';
nuevaYork.src = 'https://i.pinimg.com/originals/c5/8f/f4/c58ff400f1211f36c8808c55eb9d2bcd.jpg'; */

function chooseCity (event) {
    const selectCity = event.target.value;
    if (selectCity === '1') {
        img.src = 'https://www.miradormadrid.com/wp-content/uploads/2016/01/Madrid-de-noche-16.jpg';
    } else if (selectCity === '2') {
        img.src = 'https://i.pinimg.com/originals/5f/66/9f/5f669f631f9d036142f1dcbd87459477.jpg';
    } else {
        img.src = 'https://i.pinimg.com/originals/c5/8f/f4/c58ff400f1211f36c8808c55eb9d2bcd.jpg';
    
    }
}
form.addEventListener('change', chooseCity);

