'use strict';
console.log('main.js file was loaded');

// sukurti masyva su spalvom. pavadinimas colors, spalvos: red, green, blue, yellow

// index        0       1        2       3
// let colors = ['red', 'green', 'blue', 'yellow'];
let colors = [];
colors.push('red', 'green', 'blue', 'yellow');
console.log('colors ===', colors);

// gauti green reiksme
let greenElement = colors[1];
console.log('greenElement ===', greenElement);

// pakeisti blue i 'bluelagoon'
colors[2] = 'bluelagoon';
console.log('colors after lagoon ===', colors);

// Array.prototype.push('newElement', 'n...')
// Array.push()

// prideti i masyvo pabaiga spalva 'black'
colors.push('black');
console.log('colors after push ===', colors);

// prideti masyvo elementa 'white' i masyvo pradzia.
colors.unshift('white');
console.log('colors after unshift ===', colors);

// nuimti paskutini elementa su pop()
colors.pop();
console.log('colors after pop ===', colors);

// nuimti ir issaugoti kintamajame pirma elementa su shift()
let firstEl = colors.shift();
console.log('colors after shift ===', colors);

// padeti pirma nuimta elemnta i masyvo pabaiga.
colors.push(firstEl);
console.log('colors after first el to the back ===', colors);
