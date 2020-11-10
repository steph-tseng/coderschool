// Assignment 3 - Conditionals

var x = 6;

if (x > 0) {
  console.log(`${x} is a positive number`);
} else if (x === 0) {
  console.log(`${x} is zero`);
}

var a = 3;
var b = 17;
var c = 60;

if (a > b && b > c) {
  console.log(
    `${c} is the smallest number, and ${a} is the biggest number between ${c}, ${b}, ${a}`
  );
} else if (a > c && c > b) {
  console.log(
    `${b} is the smallest number, and ${a} is the biggest number between ${b}, ${c}, ${a}`
  );
} else if (c > b && b > a) {
  console.log(
    `${a} is the smallest number, and ${c} is the biggest number between ${a}, ${b}, ${c}`
  );
} else if (b > a && a > c) {
  console.log(
    `${c} is the smallest number, and ${b} is the biggest number between ${c}, ${a}, ${b}`
  );
} else if (b > c && c > a) {
  console.log(
    `${a} is the smallest number, and ${b} is the biggest number between ${a}, ${c}, ${b}`
  );
}
