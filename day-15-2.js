var input = document.getElementsByTagName ("pre") [0].textContent;
input = input.split (":").join ("");
input = input.split (",").join ("");

input = input.split ("\n");

var ingredients = {};
var names = [];

for (var i = 0; i < input.length - 1; i ++) {
  var variables = input [i].split (" ");
  ingredients [variables [0]] = {};
  ingredients [variables [0]] [variables [1]] = parseInt (variables [2]);
  ingredients [variables [0]] [variables [3]] = parseInt (variables [4]);
  ingredients [variables [0]] [variables [5]] = parseInt (variables [6]);
  ingredients [variables [0]] [variables [7]] = parseInt (variables [8]);
  ingredients [variables [0]] [variables [9]] = parseInt (variables [10]);

  names.push (variables [0]);
}

var largest = 0;

for (var w = 0; w < 101; w ++) {
  console.log (w);

  for (var x = 0; x < 101; x ++) {
    for (var y = 0; y < 101; y ++) {
      var score = 0;

      for (var z = 0; z < 101; z ++) {
        if (w + x + y + z != 100) continue;

        var calories = (w * ingredients [names [0]].calories) + (x * ingredients [names [1]].calories) + (y * ingredients [names [2]].calories) + (z * ingredients [names [3]].calories);

        if (calories != 500) continue;

        var capacity = (w * ingredients [names [0]].capacity) + (x * ingredients [names [1]].capacity) + (y * ingredients [names [2]].capacity) + (z * ingredients [names [3]].capacity);

        if (capacity < 0) continue;

        var durability = (w * ingredients [names [0]].durability) + (x * ingredients [names [1]].durability) + (y * ingredients [names [2]].durability) + (z * ingredients [names [3]].durability);

        if (durability < 0) continue;

        var flavor = (w * ingredients [names [0]].flavor) + (x * ingredients [names [1]].flavor) + (y * ingredients [names [2]].flavor) + (z * ingredients [names [3]].flavor);

        if (flavor < 0) continue;

        var texture = (w * ingredients [names [0]].texture) + (x * ingredients [names [1]].texture) + (y * ingredients [names [2]].texture) + (z * ingredients [names [3]].texture);

        if (texture < 0) continue;

		    score = capacity * durability * flavor * texture;

        if (score > largest) largest = score;
      }
    }
  }
}

console.log (largest);
alert (largest); // 1766400