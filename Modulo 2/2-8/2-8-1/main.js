'use strict';

const arr = [];
//const newLength = num.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
//console.log(newLength);

function get100Numbers () {
    for (let i = 0; i < 100; i++) {
    arr.push(i+1);
    console.log(arr[i]); 
}
}
get100Numbers ();

