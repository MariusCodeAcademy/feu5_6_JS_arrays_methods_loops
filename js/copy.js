'use strict';
console.log('copy.js file was loaded');

let sent1 = ['I', 'thought'];
console.log('sent1 ===', sent1);

// kaip nekurkti kopijos
// let sentCopy = sent1;

// kaip sukurti seklia kopija
let sentCopy = sent1.slice(0);
sentCopy = sent1.concat([]);

sentCopy[1] = 'galvojau';

console.log('sentCopy ===', sentCopy);
console.log('sent1 ===', sent1);
