// Assignment 7 - SuperFizzBuzz

// convertNumber(number);

// function SuperFizzBuzz (array)
// var super_array = 0;

// For (var i = 0; i <=array.length-1; i++) {
//   if (array[i] % 3 === 0 && array[i] % 5 === 0 && array[i] % 7 === 0) {
//   super_array.push("SuperFizzBuzz");
//   }
//   else if (array[i] % 21 === 0) {
//     super_array.push("SuperFizz")
//   }
//   else if (array[i] % 35 === 0) {
//     super_array.push("SuperBuzz")
//   }
//   else if (array[i] % 15 === 0) {
//     super_array.push("FizzBuzz")
//   }
//   else if (array[i] % 3 === 0) {
//     super_array.push("Fizz")
//   }
//   else if (array[i] % 5 === 0) {
//     super_array.push("Buzz")
//   }
//   else if (array[i] % 7 === 0) {
//     super_array.push("Super")
//   }
//   else
//     super_array.push(array[i])
// return super_array;
// }

for (i = 1; i < 51; i++) {
  if (i % 3 === 0 && i % 5 === 0 && i % 7 ===0) {
    console.log("SuperFizzBuzz")
  }
  else if (i % 3 === 0 && i % 7 === 0) {
    console.log("SuperFizz");}
  else if (i % 5 === 0 && i % 7 === 0) {
    console.log("SuperBuzz");}
  else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 7 ===0) {
    console.log("Super")
  } else {
    console.log(`${i}`);
  }
}

function convertNumber(number)
function outputRange(start, end)

// x.toString();