"use strict";

let counter = 13;
let image = 0;
let temp;

const incrementAndShowCounter = () => {
  counter--;
  const time = document.querySelector(".time");
  const section = document.querySelector(".js-image");
  time.innerHTML = counter;
  const src =
    "http://2.bp.blogspot.com/_hoztOfPn2i0/SzaHmsXniZI/AAAAAAAAAJM/_K7q7RmM0Nc/s320/peculiar_grape.jpg";
  section.innerHTML += `<img src="${src}", width="50px" height="50px" />`;
  if (counter === 0) {
    time.innerHTML = "";
    section.innerHTML = "";
  }
};

temp = setInterval(incrementAndShowCounter, 1000);
