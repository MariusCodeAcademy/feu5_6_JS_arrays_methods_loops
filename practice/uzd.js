'use strict';
console.log('uzd.js file was loaded');
// index              0   1   2   3
const numbersArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
console.log('numbersArray ===', numbersArray);

// 4. Pakelti masyvo narius kvadratu
let uzd4Arr = numbersArray.slice();

for (let i = 0; i < uzd4Arr.length; i++) {
  let skaicius = uzd4Arr[i];
  uzd4Arr[i] = skaicius ** 2;
}
// console.log('uzd4Arr ===', uzd4Arr);
// console.log('numbersArray ===', numbersArray);

// 5. Padauginti masyvo narius iš jų index'0 (vietos masyve)

let uzd5Arr = numbersArray.slice();
console.log('uzd5Arr ===', uzd5Arr);

for (let i = 0; i < uzd5Arr.length; i++) {
  let sk = uzd5Arr[i];
  uzd5Arr[i] = sk * i;
}
console.log('uzd5Arr === po', uzd5Arr);

// 6. Atrinkti tiktai teigimų elementų masyvą

// reikia tuscio masyvo kur desim teigiamus

// psiaudo kodas
// sukurti cikla per visa masyva
// - ciklo metu
// tikrtinti ar sk yra daugiau uz 0
// jei yra dedam i tuscia masyva
// jei ne - praleidziam
