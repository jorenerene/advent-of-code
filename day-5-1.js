var input = document.getElementsByTagName ("pre") [0].textContent.split ("\n");

var nice = 0;
for (var i = 0; i < input.length; i ++) {
  if (input [i].indexOf ("ab") != -1 ||
  input [i].indexOf ("cd") != -1 ||
  input [i].indexOf ("pq") != -1 ||
  input [i].indexOf ("xy") != -1) continue;

  // http://stackoverflow.com/questions/6176684/how-to-determine-if-a-string-contains-a-sequence-of-repeated-letters
  if ((/([a-z])\1/i).test (input [i])) {
    var vowels = 3;

    for (var n = 0; n < input [i].length; n ++) {
      if (input [i] [n] == "a") vowels --;
      if (input [i] [n] == "e") vowels --;
      if (input [i] [n] == "i") vowels --;
      if (input [i] [n] == "o") vowels --;
      if (input [i] [n] == "u") vowels --;
    }

    if (vowels < 1) nice ++;
  }
}

alert (nice); // 236
