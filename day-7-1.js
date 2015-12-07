var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var sample = "123 -> x\n456 -> y\nx AND y -> d\nx OR y -> e\nx LSHIFT 2 -> f\ny RSHIFT 2 -> g\nNOT x -> h\nNOT y -> i".split ("\n");

var wires = {};
var skip = [];

// find concrete numbers first
for (var i = 0; i < input.length; i ++) {
  var parameters = input [i].split (" ");

  if (parameters.length != 3 || isNaN (parameters [0])) continue;

  wires [parameters [2]] = parameters [0];
  skip.push (i);
}

console.log (wires);
console.log (skip);
console.log (input.length);

var skipped = 0;

// use variables with values until none are undefined
while (skip.length < input.length && skip.length != skipped) {
  skipped = skip.length;

  for (var i = 0; i < input.length; i ++) {
    var parameters = input [i].split (" ");

    if (skip.indexOf (i) != -1) continue;

    if (parameters.length == 3 && parameters [0] in wires) {
      wires [parameters [2]] = wires [parameters [0]];
    }

    if (parameters [0] == "NOT" && parameters [1] in wires) {
      skip.push (i);
      wires [parameters [3]] = ~ wires [parameters [1]];

      continue;
    }

    if (parameters [0] in wires && parameters [2] in wires) {
      skip.push (i);

      if (parameters [1] == "OR") wires [parameters [4]] = wires [parameters [0]] | wires [parameters [2]];
      if (parameters [1] == "LSHIFT") wires [parameters [4]] = wires [parameters [0]] << wires [parameters [2]];
      if (parameters [1] == "RSHIFT") wires [parameters [4]] = wires [parameters [0]] >> wires [parameters [2]];
      if (parameters [1] == "AND") wires [parameters [4]] = wires [parameters [0]] & wires [parameters [2]];

      continue;
    }

    if (!isNaN (parameters [0]) && parameters [2] in wires) {
      skip.push (i);

      if (parameters [1] == "OR") wires [parameters [4]] = parameters [0] | wires [parameters [2]];
      if (parameters [1] == "LSHIFT") wires [parameters [4]] = parameters [0] << wires [parameters [2]];
      if (parameters [1] == "RSHIFT") wires [parameters [4]] = parameters [0] >> wires [parameters [2]];
      if (parameters [1] == "AND") wires [parameters [4]] = parameters [0] & wires [parameters [2]];

      continue;
    }

    if (parameters [0] in wires && !isNaN (parameters [2])) {
      skip.push (i);

      if (parameters [1] == "OR") wires [parameters [4]] = wires [parameters [0]] | parameters [2];
      if (parameters [1] == "LSHIFT") wires [parameters [4]] = wires [parameters [0]] << parameters [2];
      if (parameters [1] == "RSHIFT") wires [parameters [4]] = wires [parameters [0]] >> parameters [2];
      if (parameters [1] == "AND") wires [parameters [4]] = wires [parameters [0]] & parameters [2];

      continue;
    }

    if (!isNaN (parameters [0]) && !isNaN (parameters [2])) {
      skip.push (i);

      if (parameters [1] == "OR") wires [parameters [4]] = parameters [0] | parameters [2];
      if (parameters [1] == "LSHIFT") wires [parameters [4]] = parameters [0] << parameters [2];
      if (parameters [1] == "RSHIFT") wires [parameters [4]] = parameters [0] >> parameters [2];
      if (parameters [1] == "AND") wires [parameters [4]] = parameters [0] & parameters [2];

      continue;
    }
  }

  console.log (skip.length);
}

console.log (wires.a);
alert (wires.a);