'use strict';

const numbers = [1, 2, 3];


function newArr () {
for (const number of numbers) {
    const newItem = document.createElement("li");
    const newContent = document.createTextNode(number);
    newItem.appendChild(newContent);
    const list = document.querySelector('.js-list');
    list.appendChild(newItem);
}
}
newArr();

