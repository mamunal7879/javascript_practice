// /*

// let price = 100;
// let ledaderPrice = true;

// price = ledaderPrice ? 0 : price + 50;
// console.log(price);

//   console.log(price + 30);

// let category = 'car';
// let carType;

// switch (category) {
//   case 'car':
//     carType = 'this is a car';
//     break;
//   case 'bike':
//     carType = 'this is a bike';
//     break;
//   case 'rikshaw':
//     carType = 'this is a rikshaw';
//     break;
//   case 'tomtom':
//     carType = 'this is a tomtom';
//     break;
//   default:
//     carType = 'ami chini na';
// }
// console.log(carType);

let mark = 80;
let grade;
switch (mark) {
  case 100:
    grade = 'Golden';
    break;
  case 80:
    grade = 'A+';
    break;
    grade = 'A-';
    break;
  default:
    grade = 'fail';
}

console.log(grade);
/*  
*include er bebohar

*/
const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];
const hasnumber = numbers.includes(55);
console.log(hasnumber);

// array concet korar jonno bebohar

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, 7, 8, 9, 10];
const concatedarray = firstArray.concat(secondArray);
console.log(concatedarray);

// join er bebohar
const joinedArray = firstArray.join(' $ ');
console.log(joinedArray);

// position er bebohar
const position = firstArray.indexOf(4);
console.log(position);

// arry kina ta check korar jonno

console.log(Array.isArray(firstArray));
