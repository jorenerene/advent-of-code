var input = [20, 15, 10, 5, 5];

var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");
delete input [input.length - 1];

for (var i = 0; i < input.length; i ++) {
  input [i] = parseInt (input [i]);
}

var criteria = 150;

function sum (inputArray) {
  var sum = 0;
  for (var i in inputArray) sum += inputArray [i];
  return sum;
}

function combinations (subject) {
  var results = [];
  var temporary = [];
  var count = Math.pow (2, subject.length);

  for (var i = 0; i < count; i++) {
  	temporary = [];
  	for (var j = 0; j < subject.length; j++) {
  		if ((i & Math.pow (2, j))) {
  			temporary.push (subject [j]);
  		}
  	}

    if (sum (temporary) == criteria) {
  		results.push (temporary);
  	}
  }

  return results;
}

var solution = combinations (input);

var minimum = solution.length;

for (var i = 0; i < solution.length; i ++) {
  if (solution [i].length < minimum) minimum = solution [i].length;
}

var count = 0;

for (var i = 0; i < solution.length; i ++) {
  if (solution [i].length == minimum) count ++;
}

console.log (count);
alert (count); // 4