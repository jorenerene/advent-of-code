var input = document.getElementsByTagName ("pre") [0].textContent;
input = input.split ("\n");
var total = 0;

for (var x = 0; x < input.length; x ++) {
  var dimensions = input [x].split ("x");
  if (dimensions.length < 3) break; // EMPTY TRAILING HACK

  var first = dimensions [0] * dimensions [1];
  var second = dimensions [0] * dimensions [2];
  var third = dimensions [1] * dimensions [2];

  var smallest = first < second ? first : second;
  smallest = smallest < third ? smallest : third;

  total += (2 * first) + (2 * second) + (2 * third) + smallest;
}

console.log (total); // 1588178
