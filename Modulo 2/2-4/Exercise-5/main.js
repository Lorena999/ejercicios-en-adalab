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

function getEl2(sel) {
  const selector = document.querySelector(sel);
  if (selector === null) {
    return `No existe ningún elemento con clase, id o tag llamado ${sel}`;
  } else {
    return document.querySelector(sel);
  }
}
const text2 = getEl2(".jsr-text");
console.log(text2);
