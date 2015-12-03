var input = document.getElementsByTagName ("pre") [0].textContent;

var x = 0;
var y = 0;

var santa_position = {
  "x": 0,
  "y": 0
};

var robot_position = {
  "x": 0,
  "y": 0
};

var santa_positions = [];
var robot_positions = [];
var all_positions = [];

santa_positions.push ("0-0");
robot_positions.push ("0-0");
all_positions.push ("0-0");

for (var i = 0; i < input.length; i ++) {
  // Santa EVEN
  if ((i % 2) == 0 || i == 0) {
    if (input [i] == "^") {
      santa_position.y ++;
    } else if (input [i] == "v") {
      santa_position.y --;
    } else if (input [i] == ">") {
      santa_position.x ++;
    } else if (input [i] == "<") {
      santa_position.x --;
    }

    if (santa_positions.indexOf (santa_position.x + "-" + santa_position.y) == -1) {
      santa_positions.push (santa_position.x + "-" + santa_position.y);
    }

    if (all_positions.indexOf (santa_position.x + "-" + santa_position.y) == -1) {
      all_positions.push (santa_position.x + "-" + santa_position.y);
    }
  } else {
    // Robot ODD
    if (input [i] == "^") {
      robot_position.y ++;
    } else if (input [i] == "v") {
      robot_position.y --;
    } else if (input [i] == ">") {
      robot_position.x ++;
    } else if (input [i] == "<") {
      robot_position.x --;
    }

    if (robot_positions.indexOf (robot_position.x + "-" + robot_position.y) == -1) {
      robot_positions.push (robot_position.x + "-" + robot_position.y);
    }

    if (all_positions.indexOf (robot_position.x + "-" + robot_position.y) == -1) {
      all_positions.push (robot_position.x + "-" + robot_position.y);
    }
  }
}

console.log (robot_positions.length + santa_positions.length);
console.log (all_positions.length);
