var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

// var on = [];
var grid = [];

var i, n, m, o;

// CACHE GRID
for (n = 0; n < 1000; n ++) {
  grid.push ([]);

  for (m = 0; m < 1000; m ++) {
    o = grid.length - 1;
    grid [o].push (false);
  }
}

console.log (grid);

// INTERPRET INSTRUCTIONS
for (i = 0; i < input.length; i ++) {
  var coordinates = input [i].split (" ");

  if (input [i].indexOf ("toggle") == 0) {
    var start = coordinates [1].split (",");
    var end = coordinates [3].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    end [0] = parseInt (end [0]);
    end [1] = parseInt (end [1]);

    /*
    var width = start [1] - start [0];
    var height = end [1] - end [0];
    var area = width * height;
    */

    for (n = start [0]; n <= end [0]; n ++) {
      for (m = start [1]; m <= end [1]; m ++) {
        grid [n] [m] = !grid [n] [m];

        /*
        if (on.indexOf (n + "-" + m) != -1) {
          // var remove = on.indexOf (n + "-" + m);
          // on.splice (remove, 1);

          lit [n] [m];
        } else {
          on.push (n + "-" + m);
        }
        */
      }
    }
  } else if (input [i].indexOf ("turn on ") == 0) {
    var start = coordinates [2].split (",");
    var end = coordinates [4].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    end [0] = parseInt (end [0]);
    end [1] = parseInt (end [1]);

    for (n = start [0]; n <= end [0]; n ++) {
      for (m = start [1]; m <= end [1]; m ++) {
        grid [n] [m] = true;

        // if (on.indexOf (n + "-" + m) == -1) on.push (n + "-" + m);
      }
    }
  } else if (input [i].indexOf ("turn off ") == 0) {
    // turn off
    var start = coordinates [2].split (",");
    var end = coordinates [4].split (",");

    start [0] = parseInt (start [0]);
    start [1] = parseInt (start [1]);
    end [0] = parseInt (end [0]);
    end [1] = parseInt (end [1]);

    for (n = start [0]; n <= end [0]; n ++) {
      for (m = start [1]; m <= end [1]; m ++) {
        grid [n] [m] = false;

        // var remove = on.indexOf (n + "-" + m);
        // if (remove != -1) on.splice (remove, 1);
      }
    }
  }

  console.log ((i + 1) + " / " + input.length);
  // console.log (on.length);
}

// EVALUATE GRID
var lit = 0;
for (n = 0; n < 1000; n ++) {
  for (m = 0; m < 1000; m ++) {
    if (grid [n] [m]) lit ++;
  }
}

console.log (lit);
alert (lit); // 400410