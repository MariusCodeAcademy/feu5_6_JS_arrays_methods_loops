'use strict';
console.log('toString_join_split.js file was loaded');

let sent1 = ['I', 'thought', 'Javascript', 'is', 'easy'];
console.log('sent1 ===', sent1);
// irasyti i el su id 'app' masyva

// sent1 bus iskviesta toString() metodas nes is html rasom tik string
document.getElementById('app').textContent = sent1;

// sujungti masyva i string per nurodyta skirtuka
// Array.prototype.join(skirtukas)
// sujungia masyva ir grazina stringa i iskvietimo vieta.
// panaudoti join ir sujungti masyva ir irasyti i html sakini atskirta tarpeliais ir uzbaigti tasku.

let stringFromArray = sent1.join(' ');
console.log('stringFromArray ===', stringFromArray);

document.getElementById('app').textContent = stringFromArray + '.!!!';

// String.prototype.split(skirtukas)
// atvirkscias veiksmas join()

let strSent = 'Hello my name is James';
let arrayFromString = strSent.split(' ');
console.log('arrayFromString ===', arrayFromString);
arrayFromString.reverse();
console.log('arrayFromString ===', arrayFromString);
let stringBackwards = arrayFromString.join(' ');
console.log('stringBackwards ===', stringBackwards);
