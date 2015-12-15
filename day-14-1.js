var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var seconds = 2503;

var reindeers = {};

for (var i = 0; i < input.length - 1; i ++) {
  var variables = input [i].split (" ");

  if (typeof reindeers [variables [0]] == "undefined") {
    reindeers [variables [0]] = {};
  }

  // var other = variables [10].slice (0, -1);

  reindeers [variables [0]] ["speed"] = parseInt (variables [3]);
  reindeers [variables [0]] ["fly"] = parseInt (variables [6]);
  reindeers [variables [0]] ["rest"] = parseInt (variables [13]);
  reindeers [variables [0]] ["switch"] = parseInt (variables [6]);
  reindeers [variables [0]] ["atRest"] = false;
  reindeers [variables [0]] ["distance"] = 0;
  reindeers [variables [0]] ["points"] = 0;
}

for (var i = 0; i < seconds; i ++) {
  for (x in reindeers) {
    if (i == reindeers [x].switch) {
      reindeers [x].atRest = !reindeers [x].atRest;

      reindeers [x].switch += reindeers [x].atRest ? reindeers [x].rest : reindeers [x].fly;
    }

    if (!reindeers [x].atRest) {
      reindeers [x].distance += reindeers [x].speed;
    }
  }
}

var winner = 0;

for (x in reindeers) {
  if (reindeers [x].distance > winner) winner = reindeers [x].distance;
}

console.log (reindeers);
console.log (winner); // 2640
alert (winner);