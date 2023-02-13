'use strict';
console.log('splice_slice.js file was loaded');

//   index       0      1        2          3           4        5
// let colors = ['white', 'red', 'green', 'bluelagoon', 'yellow', 'black'];
// console.log('colors ===', colors);

// Array.prototype.splice(pradzia, kiekIstrinti, prideti1, prideti2, .....)
// pradzia yra indexas kur ivyks istrynimas ir pridejimas

// pasalinti red ir green
// colors.splice(1, 2);
// console.log('colors ===', colors); //['white', 'bluelagoon', 'yellow', 'black']

// colors.splice(2, 2);
// console.log('colors ===', colors);

// istrinti green ir bluelagoon ir vietoj ju ideti 'tomato', 'coral', 'pink'
// colors.splice(2, 2, 'tomato', 'coral', 'pink');
// console.log('colors after splice ===', colors);

// pasalinti elementa kurio indexa gavom
let elToBeDeletedIndex = 3;
// elToBeDeletedIndex = +prompt('ka trinam, iki 5');

// colors.splice(elToBeDeletedIndex, 1);
// console.log('colors ===', colors);

// SLICE - nemodifikuoja masyvo

//   index       0      1        2          3           4        5
let colors = ['white', 'red', 'green', 'bluelagoon', 'yellow', 'black'];
console.log('colors ===', colors);

// Array.prototype.slice(pradzia,pabaiga)
// pradzia index nuo kur pradedam
// pabaiga iki kurio index imam (neimtitai)
// pagaiga? yra parametras kurio galim ir nerasyti, tai tada imami visi el iki galo
// pagaiga gali buti neigiamas, imami elementai skaiciuojant nuo galo

// gauti nauja masyva nuo green iki yellow imtinai

let newColorsSlice = colors.slice(2, 5);
// console.log('newColorsSlice ===', newColorsSlice);
// console.log('colors ===', colors);

// gauti nauja masyva su paskutiniais 3 elementais
let last3Els = colors.slice(-3);
last3Els = colors.slice(3, 6);
last3Els = colors.slice(3);

console.log('last3Els ===', last3Els);
