'use strict';
console.log('uzd.js file was loaded');
// index              0   1   2   3
const numbersArray = [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];

console.log('numbersArray ===', numbersArray);

function theBegginingCode() {
  //

  // // sk 12 pavesti i 35
  // numbersArray[1] = 35

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
  const positivesArr = [];

  // psiaudo kodas
  for (let i = 0; i < numbersArray.length; i++) {
    let sk = numbersArray[i];
    if (sk > 0) {
      // console.log('sk ===', sk);
      // jei reiksme teigiama dedam i kibireli
      positivesArr.push(sk);
    }
  }
  console.log('positivesArr ===', positivesArr);
  // sukurti cikla per visa masyva
  // - ciklo metu
  // tikrtinti ar sk yra daugiau uz 0
  // jei yra dedam i tuscia masyva
  // jei ne - praleidziam

  let lyginiaiArr = [];
  for (let i = 0; i < numbersArray.length; i++) {
    let sk = numbersArray[i];
    // ar sk lyginis
    if (sk % 2 === 0) {
      // console.log('sk ===', sk);
      lyginiaiArr.push(sk);
    }
  }
  console.log('lyginiaiArr ===', lyginiaiArr);

  // 10. Visas neigiamas vertes masyve padaryti teigiamomis
  // [2, 12, 33, -7, 28, 49, -17, 19, 42, -14, -10, 20];
  let uzd10Copy = numbersArray.slice();
  // psiaudo kodas
  // sukti cikla per masyva
  for (let i = 0; i < uzd10Copy.length; i++) {
    let sk = uzd10Copy[i];
    // tikrinti ar einama reiksme yra neigiama,
    if (sk < 0) {
      // TAIP - > paversti teigiama
      console.log('sk neigiama sk ===', sk);
      let positiveFromNegative = sk * -1;
      console.log('sk magically made positive ===', positiveFromNegative);
      uzd10Copy[i] = positiveFromNegative;
    }
    // NE - praleisti
  }
  console.log('uzd10Copy ===', uzd10Copy);

  // 11. Pakelti visas masyvo reikšmes laipsniu 'index'

  let uzd11Copy = numbersArray.slice();

  for (let i = 0; i < uzd11Copy.length; i++) {
    let sk = uzd11Copy[i];
    let skLaipsniu = sk ** i;
    let skEksponentiniu = skLaipsniu.toExponential();
    uzd11Copy[i] = skEksponentiniu;
  }
  console.log('uzd11Copy ===', uzd11Copy);
}

// 17. Sukurti funkciją, kuri ima masyvą ir grąžina visų
// jo elementų sumą
const numbersArray2 = [2, 12, 33];

function sumArrValues(arr) {
  // kibirelis
  let total = 0;
  // ciklas
  for (let sk of arr) {
    console.log('sk ===', sk);
    total = total + sk;
  }
  return total;
}

const total1 = sumArrValues(numbersArray2);
console.log('total1 ===', total1);
const numArrTotal = sumArrValues(numbersArray);
console.log('numArrTotal ===', numArrTotal);
