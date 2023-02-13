('use strict');
console.log('loop_for_array.js file was loaded');

//   index       0      1        2          3           4        5
let colors = ['white', 'red', 'green', 'bluelagoon', 'yellow', 'black'];
console.log('colors ===', colors);
// console.log('colors.length ===', colors.length);
let sent1 = ['I', 'know', 'Javascript', 'is', 'easy'];
console.log('sent1 ===', sent1);
// atspausdinti konsoleje visas spalvas

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);
// console.log(colors[4]);
// console.log(colors[5]);

console.log('----*');
for (let i = 0; i < colors.length; i++) {
  // console.log(i);
  // console.log(colors[i]);
}

console.log('----*');
for (let i = 0; i < sent1.length; i++) {
  // console.log(i);
  let index = i;
  let value = sent1[index];

  if (index === 1) {
    console.log(value.toLocaleUpperCase());
  } else {
    console.log(value);
  }
}

// sugeneruoti li elementus is colors masyvo i stringa ir ideti i ul su id 'list'
// susikuriam kintamaji kuris bus visu li el hmtml stringas
let liString = '';
for (let i = 0; i < colors.length; i++) {
  let index = i;
  let value = colors[index];
  // jungiam visus elementus ir stringa
  liString = liString + `<li> ${value} </li>`;
}

console.log('liString ===', liString);
// talpiname i html
document.getElementById('list').innerHTML = liString;

//
let nums = [2, 5, 10];

// atspausdinti konsoleje visas reiksmes padaugtintas is 2 su for ciklu
// surasyti i nauja masyva dvigubas reiksmes is masyvo

let doubleArr = [];
// doubleArr.push()
