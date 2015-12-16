var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var sues = [];

var criteria = {
  children: 3,
  cats: 7,
  samoyeds: 2,
  pomeranians: 3,
  akitas: 0,
  vizslas: 0,
  goldfish: 5,
  trees: 3,
  cars: 2,
  perfumes: 1
}

function checkSue (sue) {
  var valid = 0;

  for (var x in criteria) {
    if ((x == "cats" || x == "trees") && typeof sue [x] != "undefined" && sue [x] > criteria [x]) {
      valid ++;
    } else if ((x == "pomeranians" || x == "goldfish") && typeof sue [x] != "undefined" && sue [x] < criteria [x]) {
      valid ++;
    } else if (typeof sue [x] != "undefined" && sue [x] == criteria [x]) valid ++;

    // LITERAL HACK. INPUT COULD'VE VARIED
    if (valid == 3) return true;
  }

  console.log (valid);

  return false;
}

for (var i = 0; i < input.length - 1; i ++) {
  var variables = input [i].split (" ");
  var sue = {};

  var variable = variables [2].replace (":", "");
  var value = parseInt (variables [3].replace (",", ""));

  sue [variable] = value;

  variable = variables [4].replace (":", "");
  value = parseInt (variables [5].replace (",", ""));

  sue [variable] = value;

  variable = variables [6].replace (":", "");
  value = parseInt (variables [7].replace (",", ""));

  sue [variable] = value;

  sues.push (sue);
}

for (var i = 0; i < sues.length; i ++) {
  if (checkSue (sues [i])) {
    console.log (i + 1);
    alert (i + 1); // 260
    break;
  }
}