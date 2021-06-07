"use strict";

const box = document.querySelector(".js-div");

const boxOffsetHeight = box.offsetHeight;

box.style.height = `${boxOffsetHeight / 3} px`;
