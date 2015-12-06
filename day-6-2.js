var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

// var on = [];
var grid = [];
var i, n, m, o;
var coordinates, start, stop;

// CACHE GRID
for (n = 0; n < 1000; n ++) {
  grid.push ([]);

  for (m = 0; m < 1000; m ++) {
    o = grid.length - 1;
    grid [o].push (0);
  }
}

console.log (grid);

// INTERPRET INSTRUCTIONS
for (i = 0; i < input.length; i ++) {
  var coordinates = input [i].split (" ");

  if (input [i].indexOf ("toggle") == 0) {
    var start = coordinates [1].split (",");
    var stop = coordinates [3].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    stop [0] = parseInt (stop [0]);
    stop [1] = parseInt (stop [1]);

    for (n = start [0]; n <= stop [0]; n ++) {
      for (m = start [1]; m <= stop [1]; m ++) {
        grid [n] [m] += 2;
      }
    }
  } else if (input [i].indexOf ("turn on ") == 0) {
    var start = coordinates [2].split (",");
    var stop = coordinates [4].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    stop [0] = parseInt (stop [0]);
    stop [1] = parseInt (stop [1]);

    for (n = start [0]; n <= stop [0]; n ++) {
      for (m = start [1]; m <= stop [1]; m ++) {
        grid [n] [m] ++;
      }
    }
  } else if (input [i].indexOf ("turn off ") == 0) {
    // turn off
    var start = coordinates [2].split (",");
    var stop = coordinates [4].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    stop [0] = parseInt (stop [0]);
    stop [1] = parseInt (stop [1]);

    for (n = start [0]; n <= stop [0]; n ++) {
      for (m = start [1]; m <= stop [1]; m ++) {
        if (grid [n] [m] == 0) continue;
        grid [n] [m] --;
      }
    }
  }

  console.log ((i + 1) + " / " + input.length);
}

// EVALUATE GRID
var brightness = 0;
for (n = 0; n < 1000; n ++) {
  for (m = 0; m < 1000; m ++) {
    brightness += grid [n] [m];
  }
}

console.log (brightness);
alert (brightness); // 15343601
