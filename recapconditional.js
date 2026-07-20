// /*
//  *ternary operatior
//  */
// let price = 100;
// let ledaderPrice = true;

// price = ledaderPrice ? 0 : price + 50;
// console.log(price);

// // if (ledaderPrice + 0) {
// //   console.log('No Payment');
// // } else {
// //   console.log(price + 30);
// // }
// // switch er bebohar

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

let mark = 70;
let grade;
switch (mark) {
  case 100:
    grade = 'Golden';
    break;
  case 80:
    grade = 'A+';
    break;
  case 70 > 100:
    grade = 'A-';
    break;
  default:
    grade = 'fail';
}

console.log(grade);
