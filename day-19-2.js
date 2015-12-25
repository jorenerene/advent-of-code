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
// var input = "e => H\ne => O\nH => HO\nH => OH\nO => HH\n\nHOH\n".split ("\n"); // 3
// var input = "e => H\ne => O\nH => HO\nH => OH\nO => HH\n\nHOHOHO\n".split ("\n"); // 6

var replacements = [];

// Cache variables
for (var x = 0; x < input.length && input [x] != ""; x ++) {
  var variables = input [x].split (" => ");

  var replacement = {
    from: variables [0],
    to: variables [1]
  };

  replacements.push (replacement);
}

console.log (replacements);

// Cache the objective
var objective = input [input.length - 2];

console.log (objective);

var permutations = permutator (replacements);

console.log (permutations);

// http://stackoverflow.com/questions/3410464/how-to-find-all-occurrences-of-one-string-in-another-in-javascript
function indexes (source, find) {
  var result = [];
  for (i = 0; i < source.length; ++i) {
    // If you want to search case insensitive use
    // if (source.substring (i, i + find.length).toLowerCase () == find) {
    if (source.substring (i, i + find.length) == find) {
      result.push (i);
    }
  }
  return result;
}

// http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript?rq=1
String.prototype.replaceAt = function (index, from, to) {
  return this.substr (0, index) + this.substr (index).replace (from, to);
}

var least = 90000000000;
var permutation;
var steps = 0;
var result;

for (var x = 0; x < permutations.length; x ++) {
  steps = 0;
  permutation = permutations [x];

  if (permutation [0].from != "e") continue;
  result = "e";

  for (var y = 0; y < permutation.length; y ++) {
    var possible = indexes (result, permutation [y].from);

    if (possible.length == 0) break;

    possible = possible.reverse ();

    for (var z = 0; z < possible.length; z ++) {
      result = result.replaceAt (possible [z], permutation [y].from, permutation [y].to);
      steps ++;

      if (result == objective) {
        if (steps < least) least = steps;
        break;
      }
    }
  }

  console.log ((x + 1) + "/" + permutations.length);
}

console.log (least);
alert (least);