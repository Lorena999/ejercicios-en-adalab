'use strict'

const text = document.querySelector('.js-text');

function addText(){
 text.innerHTML += ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente doloribus aliquam explicabo molestias quasi! Culpa assumenda, quaerat alias quis accusantium quod odio, beatae commodi fuga sint eum rem illum distinctio?`;
}
text.addEventListener('mouseover', addText);