// http://stackoverflow.com/questions/9960908/permutations-in-javascript
function permutator (inputArr) {
	var results = [];

	function permute (arr, memo) {
		var cur, memo = memo || [];
		for (var i = 0; i < arr.length; i++) {
			cur = arr.splice (i, 1);
			if (arr.length === 0) {
				results.push (memo.concat (cur));
			}
			permute (arr.slice (), memo.concat (cur));
			arr.splice (i, 0, cur [0]);
		}
		return results;
	}
	return permute (inputArr);
}

var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var destinations = [];
var routes = [];
var backwards = [];
var visited = [];

var largest = 0;
var total = 100000000000;

var parameters, start, stop, distance;

// Cache destinations, routes, and backward routes (backwards)
for (var i = 0; i < input.length - 1; i ++) {
  parameters = input [i].split (" ");
  start = parameters [0];
  stop = parameters [2];

  if (destinations.indexOf (start) == -1) destinations.push (start);
  if (destinations.indexOf (stop) == -1) destinations.push (stop);

	routes.push (start + "-" + stop);
	backwards.push (stop + "-" + start);
}

var permutations = permutator (destinations);

// Iterate permutations against cache without repeating destinations
for (var i = 0; i < permutations.length; i ++) {
	var permutation = permutations [i];

	visited = [];
  total = 0;

	for (var x = 0; x < permutation.length - 1; x ++) {
		start = permutation [x];
	  stop = permutation [x + 1];

		route = routes.indexOf (start + "-" + stop);
		backward = backwards.indexOf (start + "-" + stop);

		if (route != -1) {
			distance = parseInt (input [route].split (" ") [4]);
			total += distance;

			if (visited.indexOf (start) == -1) visited.push (start);
		  if (visited.indexOf (stop) == -1) visited.push (stop);
		} else if (backward != -1) {
			distance = parseInt (input [backward].split (" ") [4]);
			total += distance;

			if (visited.indexOf (start) == -1) visited.push (start);
		  if (visited.indexOf (stop) == -1) visited.push (stop);
		} else {
			break;
		}
	}

	// Test and replace largest distance with visited total distance if all destinations have been visited
	if (visited.length == destinations.length && total > largest) {
		largest = total;

		continue;
	}
}

console.log (largest);
alert (largest); // 898