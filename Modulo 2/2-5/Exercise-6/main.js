'use strict'
const input = document.querySelector('.input');
let p = document.querySelector('.p');



function keyFc(event) {
    let key = event.currentTarget.value;
    p.innerHTML = key;
}
input.addEventListener('keydown', keyFc);

console.log(input);
console.log(p);