var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");
// var input = "H => HO\nH => OH\nO => HH\n\nHOH\n".split ("\n");
// var input = "H => HO\nH => OH\nO => HH\n\nHOHOHO\n".split ("\n");

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

// Cache the objective
var objective = input [input.length - 2];

// console.log (objective);

var generated = [];
var result = "";

// http://stackoverflow.com/questions/1431094/how-do-i-replace-a-character-at-a-particular-index-in-javascript?rq=1
String.prototype.replaceAt = function (index, from, to) {
  return this.substr (0, index) + this.substr (index).replace (from, to);
}

// Iterate over replacements
for (var x = 0; x < replacements.length; x ++) {
  for (var y = 0; y < objective.length; y ++) {
    if (objective.indexOf (replacements [x].from, y) != -1) {
      result = objective.replaceAt (y, replacements [x].from, replacements [x].to);
    }

    // Add this exact result to the generated array if it hasn't been added
    if (generated.indexOf (result) == -1) {
      generated.push (result);
    }
  }
}

console.log (generated.length);
alert (generated.length); // 535