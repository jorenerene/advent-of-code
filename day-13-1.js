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

var guests = {};

for (var i = 0; i < input.length - 1; i ++) {
  var variables = input [i].split (" ");

  if (typeof guests [variables [0]] == "undefined") {
    guests [variables [0]] = {};
  }

  var other = variables [10].slice (0, -1);

  guests [variables [0]] [other] = variables [2] == "gain" ? parseInt (variables [3]) : -1 * parseInt (variables [3]);
}

var everyone = [];

for (i in guests) {
  everyone.push (i);
}

// console.log (everyone);

var possibilities = permutator (everyone);

// console.log (possibilities);

var happiest = 0;

for (var x = 0; x < possibilities.length; x++) {
  var joy = 0;
  // console.log (start);
  for (var y = 0; y < 8; y ++) {
    if (y == 7) {
      joy += guests [possibilities [x] [y]] [possibilities [x] [0]];
      joy += guests [possibilities [x] [0]] [possibilities [x] [y]];
    } else {
      joy += guests [possibilities [x] [y]] [possibilities [x] [y + 1]];
      joy += guests [possibilities [x] [y + 1]] [possibilities [x] [y]];
    }
  }

  if (joy > happiest) happiest = joy;
}

console.log (happiest);
alert (happiest); // 733