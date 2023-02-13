'use strict';
console.log('concat.js file was loaded');

let sent1 = ['I', 'thought'];
let sent2 = ['Javascript', 'is', 'easy'];
let sent3 = ['and', 'it', 'is'];
console.log('sent1 ===', sent1);
console.log('sent2 ===', sent2);
// Array.prototype.concat(newArr, arr...) = sujungiam kelis masyvus i viena.
// grazina kopija nekeicia orginalu

let fullSentence = sent1.concat(sent2, sent3, ['Or', 'is', 'it?']);
console.log('fullSentence ===', fullSentence);
console.log('----- po');
console.log('sent1 ===', sent1);
console.log('sent2 ===', sent2);
