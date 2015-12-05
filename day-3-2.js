var input = document.getElementsByTagName ("pre") [0].textContent;

var santa = {
  "x": 0,
  "y": 0
};

var robot = {
  "x": 0,
  "y": 0
};

var positions = ["0-0"];

for (var i = 0; i < input.length; i ++) {
  // Santa EVEN
  if ((i % 2) == 0 || i == 0) {
    if (input [i] == "^") santa.y ++;
    else if (input [i] == "v") santa.y --;
    else if (input [i] == ">") santa.x ++;
    else if (input [i] == "<") santa.x --;

    if (positions.indexOf (santa.x + "-" + santa.y) == -1) positions.push (santa.x + "-" + santa.y);
  } else {
    // Robot ODD
    if (input [i] == "^") robot.y ++;
    else if (input [i] == "v") robot.y --;
    else if (input [i] == ">") robot.x ++;
    else if (input [i] == "<") robot.x --;

    if (positions.indexOf (robot.x + "-" + robot.y) == -1) positions.push (robot.x + "-" + robot.y);
  }
}

console.log (positions.length); // 2639
