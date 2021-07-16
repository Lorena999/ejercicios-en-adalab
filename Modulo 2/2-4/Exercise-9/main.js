"use strict";

"use strict";
// modificamos una variable de ámbito global
/*let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}*/

// arrow fuction
let secretLetter = "y";
const mySecretLetter = () => {
  secretLetter = "x";
  return secretLetter;
};
console.log(secretLetter);
console.log(mySecretLetter());
