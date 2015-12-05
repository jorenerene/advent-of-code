var input = document.getElementsByTagName ("pre") [0].textContent;

var x = 0;
var y = 0;

var positions = ["0-0"];

for (var i = 0; i < input.length; i ++) {
  if (input [i] == "^") {
    y ++;
  } else if (input [i] == "v") {
    y --;
  } else if (input [i] == ">") {
    x ++;
  } else if (input [i] == "<") {
    x --;
  }

  if (positions.indexOf (x + "-" + y) == -1) positions.push (x + "-" + y);
}

console.log (positions.length); // 2565
