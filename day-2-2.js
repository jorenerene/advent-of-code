var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");
var total = 0;

for (var x = 0; x < input.length; x ++) {
  var dimensions = input [x].split ("x");
  if (dimensions.length < 3) break;
  console.log (dimensions);

  dimensions [0] = parseInt (dimensions [0]); // LARGEST HACK
  dimensions [1] = parseInt (dimensions [1]);
  dimensions [2] = parseInt (dimensions [2]);

  var bow = dimensions [0] * dimensions [1] * dimensions [2];

  var largest = dimensions [0] > dimensions [1] ? 0 : 1;
  largest = dimensions [largest] > dimensions [2] ? largest : 2;

  var wrap = (dimensions [0] * 2) + (dimensions [1] * 2) + (dimensions [2] * 2) - (dimensions [largest] * 2);
  console.log (wrap);
  console.log (dimensions [largest]);

  total += bow + wrap;
}

console.log (total); // 3783758
alert (total);