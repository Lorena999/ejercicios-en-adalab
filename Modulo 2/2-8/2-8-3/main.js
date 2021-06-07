'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const numberPair = [];
const numberOdd = [];
console.log(lostNumbers.length);

function bestLostNomber() {
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            numberPair.push(lostNumbers[i]);
        } else {numberOdd.push(lostNumbers[i]);}
        const result = numberPair.concat(numberOdd);
    }
    console.log(numberPair);
    console.log(numberOdd);
    console.log(numberPair.concat(numberOdd));
}
bestLostNomber();
