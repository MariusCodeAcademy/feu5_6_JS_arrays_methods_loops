'use strict';
console.log('indexOf_includes.js file was loaded');

//   index       0      1        2          3           4        5
let colors = ['white', 'red', 'green', 'bluelagoon', 'yellow', 'black'];
console.log('colors ===', colors);

// Array.prototype.indexOf('element') - grazina index, arba -1 jei nerasta

// rasti indexa spalvos 'yellow'
let yellowIndex = colors.indexOf('yellow');
console.log('yellowIndex ===', yellowIndex);

let indexOfTomato = colors.indexOf('tomato');
console.log('indexOfTomato ===', indexOfTomato);
// pranesti jei neradom
if (indexOfTomato === -1) {
  console.log('tomato spalva nerasta');
}

// jei nezinom indexu, bet norim iskirpti reikmes nuo red iki yellow(imtinai) i nauja masyva.
let redIndex = colors.indexOf('red');
let yellowIndex1 = colors.indexOf('yellow');
let newRedToYellowArray = colors.slice(redIndex, yellowIndex1 + 1);
// newRedToYellowArray = colors.slice(
//   colors.indexOf('red'),
//   colors.indexOf('yellow') + 1
// );
console.log('newRedToYellowArray ===', newRedToYellowArray);

// ar toks elementas yra masyve ==============================
// Array.prototype.includes('element') - true arba false

// ar 'tomato' spalva yra musu masyve
let isTomatoInArray = colors.includes('tomato');
console.log('isTomatoInArray ===', isTomatoInArray);
