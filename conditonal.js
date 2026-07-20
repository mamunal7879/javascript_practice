const a = 20;
const b = 10;
console.log(a > b);
let mamunAge = 28;
let fariyaAge = 17;
console.log(mamunAge > fariyaAge);
console.log(fariyaAge < mamunAge);

// equal er bebohar
console.log(mamunAge === fariyaAge);
console.log(mamunAge >= fariyaAge);
console.log(mamunAge <= fariyaAge);
console.log(fariyaAge <= mamunAge);
console.log(mamunAge !== fariyaAge);
/*
 *thias is bulian jjand thhjko jsnmkik asdvuyhnb b hjh
 */
// if er bebohar

const x = 40;
const y = 30;

if (x > y) {
  console.log('xer man boro');
}
if (x < y) {
  console.log('jaby na');
}
// if or else er bebohar

const tomtomFare = 200;
const rikshawFare = 400;
if (tomtomFare > rikshawFare) {
  console.log('ami rikshaw kory jabo');
} else {
  console.log('ami tomtomy jabo');
}

const salery1 = 25000;
const completeBcs = true;
const haveCar = false;
if (salery1 > 20000 && completeBcs) {
  console.log('you are selected');
}
if (salery1 > 20000 && completeBcs && haveCar) {
  console.log('you are selected');
} else {
  console.log('please fullfil my thought');
}
if ((salery1 || haveCar) && completeBcs) {
  console.log('come to my office');
} else {
  console.log('you are not so far');
}
// discount amount check

const amountMain = 9000;

if (amountMain > 7999) {
  const discount = 50;
  const discountAmount = (amountMain / 100) * discount;
  const payment = amountMain - discountAmount;
  console.log('please payment:', payment);
} else if (amountMain > 5000) {
  const discount = 30;
  const discountAmount = (amountMain / 100) * discount;
  const payment = amountMain - discountAmount;
  console.log('Please Payment this amount:', payment);
} else {
  console.log('You Have No Discount');
}
// instead conditional er bebohar

const money = 900;

if (money > 800) {
  console.log('tumi to sey');
  if (money > 1000) {
    console.log('tumi sey soto');
  } else {
    console.log('jani na');
  }
  if (money > 700) {
    console.log('dhukby');
  }
}
console.log(object);
