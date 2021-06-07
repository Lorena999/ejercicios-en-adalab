"use strict";

const marks = [5, 4, 6, 7, 9];
const addSum = (mark) => mark + 1;

const inflatedMarks = marks.map(addSum);

console.log(inflatedMarks);
