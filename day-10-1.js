var input = "1113222113";

var update = "";
var repeat = input [0].toString ();
var count = 0;

for (var x = 0; x < 40; x ++) {
  for (var i = 0; i < input.length; i ++) {
    if (input [i] == repeat) {
      count ++;
    } else {
      update += count.toString () + repeat [0];
      repeat = input [i];
      count = 1;
    }
  }

  input = update + "13"; // HACK
  update = "";
  count = 0;
  repeat = input [0];
}

console.log (input.length);
alert (input.length); // 252594