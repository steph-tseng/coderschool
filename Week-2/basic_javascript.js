// Assignment 1 - Area of a circle
function areaOfACircle() {
  console.log("Area of a circle");
  var pi = 3.14;
  console.log(typeof pi);
  var radius = 5;
  console.log(typeof radius);
  var area = pi * radius ** radius;
  console.log(
    "The area of a circle given the radius" +
      radius +
      " (m) is" +
      area +
      " (m2)"
  );
  console.log(`The area of a circle given the radius ${radius} is ${area}`);
}

// areaOfACircle();

// -----------------------------------------------
// Assignment 2 - Operators & Comparison
function operatorsAndComparison() {
  console.log("-----------");
  console.log("Operators");
  console.log("-----------");
  console.log(`10 + 24 = ${10 + 24}`);
  console.log(`"10" + "24" = ${"10" + "24"}`);
  console.log(`"Hello" + " " + 2021 = ${"Hello" + " " + 2021}`);
  console.log(`1 + 2 * 3 = ${1 + 2 * 3}`);
  console.log(`1 / 0 = ${1 / 0}`);
  console.log(`6 % 2 = ${6 % 2}`);
  console.log(`5.5 % 2 = ${5.5 % 2}`);
  console.log(`Number("123") = ${Number("123")}`);
  console.log(`typeof(1 + "") = ${typeof (1 + "")}`);
  console.log("-----------");
  console.log("Comparisons");
  console.log("-----------");
  console.log(`5 == "5" = ${5 == "5"}`);
  console.log(`5 === "5" = ${5 === "5"}`);
  console.log(`8 != 8.0 = ${8 != 8.0}`);
  console.log(`8 !== 8.0 = ${8 !== 8.0}`);
  console.log(`"true" === true = ${"true" === true}`);
  console.log(`4 <= 4.0 = ${4 <= 4.0}`);
  console.log(`7 >= 7 = ${7 >= 7}`);
  console.log(`true && true = ${true && true}`);
  console.log(`true && false = ${true && false}`);
  console.log(`true || true = ${true || true}`);
  console.log(`false || true = ${false || true}`);
  console.log(`!true = ${!true}`);
  console.log(`!false = ${!false}`);
  console.log(`false && (true || true) = ${false && (true || true)}`);
  console.log(`false && true || true = ${(false && true) || true}`);
}

// operatorsAndComparison();

// -----------------------------------------------
// Assignment 3 - Conditionals
function positiveOrNegative(x) {
  if (x > 0) {
    console.log(`${x} is a positive number`);
  } else if (x === 0) {
    console.log(`${x} is zero`);
  } else if (x < 0) {
    console.log(`${x} is a negative number`);
  }
}

// positiveOrNegative();

function orderOfNumbers(a, b, c) {
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
  } else if (c > a && a > b) {
    console.log(
      `${b} is the smallest number, and ${c} is the biggest number between ${b}, ${a}, ${c}`
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
}
// orderOfNumbers(20, 5, 15);

function findBiggestAndSmallest(a, b, c) {
  var min = a;
  if (min > b) {
    min = b;
  }
  if (min > c) {
    min = c;
  }

  var max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }

  console.log(
    `${min} is the smallest number, and ${max} is the biggest number between ${a}, ${c}, ${b}`
  );
}

// findBiggestAndSmallest(3, 50, 4);

// -----------------------------------------------
// Assignment 4 - Loops
function getRangeInclusive(a, b) {
  var s = "";
  if (a > b) {
    for (var i = a; i <= b; i++) {
      // console.log(i);
      s = s + i + " ";
    }
  } else if (b > a) {
    for (var i = b; i >= a; i--) {
      // console.log(i);
      s = s + i + " ";
    }
  }
  console.log(s);
}
// getRangeInclusive(20, 66);

function sumTo(x, y) {
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum += i;
  }
  console.log(`Sum of numbers from ${x} to ${y} is: ${sum}`);
}

// sumTo(1, 10);

function sumDigits(n) {
  var sum = 0;
  for (var i = 0; i < 4; i++) {
    const current = n % 10;
    sum += current;
    n = Math.floor(n / 10);
  }
  return sum;
}

// console.log(`${sumDigits(3083)}`);

// -----------------------------------------------
// Assignment 5 - Functions

function wow() {
  "Wow, it worked!";
}

// console.log(`${wow}`);

function movie() {
  "The Lion King";
}

// console.log(`${movie}`);

function myName(name) {
  console.log(`many words ${name} yes so many words`);
}

myName("Steph");

// -----------------------------------------------
// Assignment 6 - Swapping values of two variables

function swapValues(a, b) {
  console.log(`The value of a is ${a} and the value of b is ${b}`);

  temp = a;
  a = b;
  b = temp;

  console.log(`After swapping, a is ${a} and the value of b is ${b}`);
}

// swapValues(5, 20);

// -----------------------------------------------
// Assignment 7 - SuperFizzBuzz
function SuperFizzBuzz() {
  for (i = 1; i < 51; i++) {
    if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
      console.log("SuperFizzBuzz");
    } else if (i % 3 === 0 && i % 7 === 0) {
      console.log("SuperFizz");
    } else if (i % 5 === 0 && i % 7 === 0) {
      console.log("SuperBuzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 7 === 0) {
      console.log("Super");
    } else {
      console.log(`${i}`);
    }
  }
}

// SuperFizzBuzz();

function convertNumber(i) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 === 0) {
    return "SuperFizzBuzz";
  } else if (i % 3 === 0 && i % 7 === 0) {
    return "SuperFizz";
  } else if (i % 5 === 0 && i % 7 === 0) {
    return "SuperBuzz";
  } else if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else if (i % 7 === 0) {
    return "Super";
  } else {
    return `${i}`;
  }
}

function outputRange(start, end) {
  for (var i = start; i <= end; i++) {
    console.log(convertNumber(i));
  }
}

// outputRange(0, 10);
