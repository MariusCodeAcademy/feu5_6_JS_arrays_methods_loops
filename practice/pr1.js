'use strict';
console.log('pr1.js file was loaded');

let randomArr = [11, 'cat', true, 4, 'mouse', 5, 9, 5, 76, false];
console.log('randomArr ===', randomArr);

// atspausdinti kiek vieno el tipa

// let laik11 = 11;
console.log('typeof randomArr[0] ===', typeof randomArr[0]);
console.log('typeof randomArr[0] ===', typeof randomArr[1]);

// ciklas per visa masyva
for (let i = 0; i < randomArr.length; i++) {
  console.log('reiksme', randomArr[i], typeof randomArr[i]);
}

let typesArr = [];

for (let i = 0; i < randomArr.length; i++) {
  let element = randomArr[i];
  let elType = typeof element;
  typesArr.push(elType);
}
console.log('typesArr ===', typesArr);
