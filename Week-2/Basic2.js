// Assignment 1 - Generate random integer number

function fiveRandomNum(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  for (var i = 0; i < 5; i++) {
    x = Math.random() * max + min;
    console.log(x);
  }
}

// fiveRandomNum(0, 1);

function getRandomInt(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  for (var i = 0; i < 100; i++) {
    x = Math.random() * max + min;
    console.log(Math.round(x));
  }
}

// getRandomInt(0, 10);

function getRandomInt2(start, end) {
  var start = Math.ceil(start);
  var end = Math.floor(end);
  x = Math.random() * end + start;
  console.log(Math.round(x));
}

// getRandomInt2(0, 10);
var arr = ["apple", "orange", "kiwi"];
function getRandomItem() {
  x = Math.round(Math.random(arr.length));
  console.log(`${arr[x]}`);
}

// getRandomItem(arr);

// Assignment 2 - Nested For Loop

function numRepeat(n) {
  var s = "";
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j < n - 1; j++) {
      s += i;
    }
    console.log(s);
  }
}

numRepeat(3);
