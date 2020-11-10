// Assignment 4 - Loops

// var a = 2;
// var b = 5;

// if (a > b) {
//   for (var i = a; (i) <= b; i++) {
//     console.log(i);
//   }
// } else if (b > a) {
//   for (var i = b; i >= a; i--) {
//     console.log(i);
//   }
// }

var x = 20;
var y = 66;
var sum = 0;

function sumTo(x, y) {
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  return sum;
}

console.log(`Sum of numbers from ${x} to ${y} is: ${sumTo(y)}`);

// var n = 3083;
// var product = 1;
// var sum = 0;

// function sumDigits(n) {
//   for (var i = 0; i < 5; i++) {
//     const current = n % 10;
//     sum += current;
//     product *= current;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// }

// console.log(`${sumDigits(n)}`);
