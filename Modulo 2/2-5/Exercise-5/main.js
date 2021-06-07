'use strict'
const body = document.querySelector('html');



function keyFc(event) {
    let key = event.key;
    if (key === 'r'){
        body.classList.remove('back-purple');
        body.classList.add('back-red');
    }else if (key === 'm'){
        body.classList.remove('back-red');
        body.classList.add('back-purple');
    }
}

document.addEventListener('keydown', keyFc);