var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");
// var input = "H => HO\nH => OH\nO => HH\n\nHOH\n".split ("\n");
// var input = "H => HO\nH => OH\nO => HH\n\nHOHOHO\n".split ("\n");
var input = "e => H\ne => O\nH => HO\nH => OH\nO => HH\n\nHOH\n".split ("\n");
var input = "e => H\ne => O\nH => HO\nH => OH\nO => HH\n\nHOHOHO\n".split ("\n");

var replacements = [];
var starters = [];

// Cache variables
for (var x = 0; x < input.length && input [x] != ""; x ++) {
  var variables = input [x].split (" => ");

  var replacement = {
    from: variables [0],
    to: variables [1]
  };

  if (variables [0] == "e") starters.push (replacement);
  else replacements.push (replacement);
}

// console.log (replacements);
// console.log (starters);

// Cache the objective
var objective = input [input.length - 2];

// console.log (objective);

/* I'm interpreting the following to mean that replacements can only be used once: Given the available replacements */

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

// http://stackoverflow.com/questions/3410464/how-to-find-all-occurrences-of-one-string-in-another-in-javascript
function indexes(source, find) {
  var result = [];
  for (i = 0; i < source.length; ++i) {
    // If you want to search case insensitive use
    // if (source.substring(i, i + find.length).toLowerCase() == find) {
    if (source.substring(i, i + find.length) == find) {
      result.push(i);
    }
  }
  return result;
}

// http://james.padolsey.com/javascript/deep-copying-of-objects-and-arrays/
function deepCopy (obj) {
  if (Object.prototype.toString.call (obj) === '[object Array]') {
    var out = [], i = 0, len = obj.length;

    for ( ; i < len; i++ ) {
      out [i] = arguments.callee (obj [i]);
    }

    return out;
  }

  if (typeof obj === 'object') {
    var out = {}, i;

    for (i in obj) {
      out [i] = arguments.callee (obj [i]);
    }

    return out;
  }

  return obj;
}

// fine tune permutator to ignore all entries that don't start with "e"
var permutations = permutator (replacements);

console.log (permutations);

var least = 90000000000;

var generated = [];

for (var x = 0; x < starters.length; x ++) {
  for (var y = 0; y < permutations.length; y ++) {
    var result = starters [x].to;

    var permutation = permutations [y];

    var steps = 1;

    for (var z = 0; z < permutation.length; z ++) {
      if (result.indexOf (permutation [z].from) == -1) break;

      result = result.replace (permutation [z].from, permutation [z].to);

      steps ++;

      if (result == objective && steps < least) {
        least = steps;
        generated.push (result);
        break;
      }
    }

    console.log (result);
    console.log (steps);
    console.log (objective);
  }
}

console.log (least);
alert (least);