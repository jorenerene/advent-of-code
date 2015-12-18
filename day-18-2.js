var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

// var input = ".#.#.#\n...##.\n#....#\n..#...\n#.#..#\n####..\n".split ("\n");

var grid = [];
// var steps = 5;
var steps = 100;

for (var i = 0; i < input.length - 1; i ++) {
  var row = [];

  var variables = input [i].split ("");
  // console.log (variables);

  for (var j = 0; j < variables.length; j ++) {
    row.push (variables [j]);
  }

  grid.push (row);
}

function checkLights (condition, row, column) {
  var valid = 0;

  if (condition == "#") {
    if (typeof grid [row - 1] != "undefined") {
      if (typeof grid [row - 1] [column] != "undefined" && grid [row - 1] [column] == "#") valid ++;

      if (typeof grid [row - 1] [column + 1] != "undefined" && grid [row - 1] [column + 1] == "#") valid ++;
      if (typeof grid [row - 1] [column - 1] != "undefined" && grid [row - 1] [column - 1] == "#") valid ++;
    }

    if (typeof grid [row + 1] != "undefined") {
      if (typeof grid [row + 1] [column] != "undefined" && grid [row + 1] [column] == "#") valid ++;

      if (typeof grid [row + 1] [column + 1] != "undefined" && grid [row + 1] [column + 1] == "#") valid ++;
      if (typeof grid [row + 1] [column - 1] != "undefined" && grid [row + 1] [column - 1] == "#") valid ++;
    }

    if (typeof grid [row] [column - 1] != "undefined" && grid [row] [column - 1] == "#") valid ++;
    if (typeof grid [row] [column + 1] != "undefined" && grid [row] [column + 1] == "#") valid ++;

    if (valid == 2 || valid == 3) return "#";
    else return ".";
  } else {
    if (typeof grid [row - 1] != "undefined") {
      if (typeof grid [row - 1] [column] != "undefined" && grid [row - 1] [column] == "#") valid ++;

      if (typeof grid [row - 1] [column - 1] != "undefined" && grid [row - 1] [column - 1] == "#") valid ++;
      if (typeof grid [row - 1] [column + 1] != "undefined" && grid [row - 1] [column + 1] == "#") valid ++;
    }

    if (typeof grid [row + 1] != "undefined") {
      if (typeof grid [row + 1] [column] != "undefined" && grid [row + 1] [column] == "#") valid ++;

      if (typeof grid [row + 1] [column - 1] != "undefined" && grid [row + 1] [column - 1] == "#") valid ++;
      if (typeof grid [row + 1] [column + 1] != "undefined" && grid [row + 1] [column + 1] == "#") valid ++;
    }

    if (typeof grid [row] [column - 1] != "undefined" && grid [row] [column - 1] == "#") valid ++;
    if (typeof grid [row] [column + 1] != "undefined" && grid [row] [column + 1] == "#") valid ++;

    if (valid == 3) return "#";
    else return ".";
  }
}

// http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/
function deepCopy (obj) {
  if (Object.prototype.toString.call (obj) === '[object Array]') {
    var out = [], i = 0, len = obj.length;

    for ( ; i < len; i++ ) {
      out [i] = arguments.callee (obj [i]);
    }

    return out;
  }

  if (typeof obj === 'object') {
    var out = {}, i;

    for (i in obj) {
      out [i] = arguments.callee (obj [i]);
    }

    return out;
  }

  return obj;
}

// All of the lights update simultaneously; they all consider the same current state before moving to the next.
var duplicate = deepCopy (grid); // grid.slice (0);
var total = 0;
var length = grid.length - 1;

grid [0] [0] = "#";
grid [0] [grid.length - 1] = "#";
grid [grid.length - 1] [0] = "#";
grid [grid.length - 1] [grid.length - 1] = "#";

for (var step = 0; step < steps; step ++) {
  for (var row = 0; row < grid.length; row ++) {
    for (var column = 0; column < grid [row].length; column ++) {
      if ((row == 0 || row == grid.length - 1) && (column == 0 || column == grid [row].length - 1)) {
        console.log (row + " - " + column);
        duplicate [row] [column] = "#";
      } else duplicate [row] [column] = checkLights (grid [row] [column], row, column);

      if (step == (steps - 1) && duplicate [row] [column] == "#") total ++;
    }
  }

  grid = deepCopy (duplicate); // duplicate.slice (0);
  console.log (step);
}

console.log (total);
alert (total); // 924