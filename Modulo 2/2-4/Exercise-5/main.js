"use strict";
function getEl(sel) {
  return document.querySelector(sel);
}
const text = getEl(".js-text");
console.log(text);

const btnEl = getEl(".js-text");
console.log(btnEl);

const title = getEl(".js-title");
console.log(title);
