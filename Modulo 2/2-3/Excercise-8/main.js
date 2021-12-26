"use strict";

const year = 6;
if (year % 4 === 0) {
  console.log("Estás en un año bisiesto");
} else {
  console.log(`El próximo año bisiesto es ${year + (year % 4)}`);
}
