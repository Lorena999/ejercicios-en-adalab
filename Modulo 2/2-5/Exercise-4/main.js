'use strict'
const text = document.querySelector('.js-text');
//const scrollFc = body.scrollY;

function scrollFc() {
    let scroll = window.scrollY;
    if (scroll<=250) {
        //text.classList.remove ('back-red');
        text.classList.add ('back-yellow');
    }else {
        text.classList.remove ('back-yellow');
        text.classList.add('back-red');
    }
}
window.addEventListener('scroll', scrollFc);