var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var nice = 0;
for (var i = 0; i < input.length; i ++) {
  var pair = false;
  var repeat = false;

  for (var n = 0; n < input [i].length; n ++) {
    var o = n + 1;

    if (o < input [i].length) {
      var test = input [i] [n] + input [i] [o];

      var substring = input [i].substring (n + 2); // Avoid overlapping

      if (substring.indexOf (test) != -1) pair = true;
    }

    var x = n + 2;

    if (x < input [i].length && input [i] [n] == input [i] [x]) repeat = true;

    if (pair && repeat) break;
  }

  if (pair && repeat) nice ++;
}

alert (nice); // 51
