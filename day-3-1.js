var input = document.getElementsByTagName ("pre") [0].textContent;

var x = 0;
var y = 0;

var position = {
  "x": 0,
  "y": 0
};

var singular = [];

var positions = [];

positions.push (position);

for (var i = 0; i < input.length; i ++) {
  if (input [i] == "^") {
    position.y ++;
  } else if (input [i] == "v") {
    position.y --;
  } else if (input [i] == ">") {
    position.x ++;
  } else if (input [i] == "<") {
    position.x --;
  }

  positions.push (position);
  if (singular.indexOf (position.x + "-" + position.y) == -1) singular.push (position.x + "-" + position.y);
}

console.log (positions.length);
console.log (singular.length);
