var input = "cqjxxyzz"; // zaa?

// var input = "abcdefgh"; // abcdffaa
// var input = "ghijklmn"; // ghjaabcc

var straight = false;
var omission = false;
var pairs = false;
var increment = false;

String.prototype.replaceAt = function (index, character) {
  var subject = this.split ("");
  subject [index] = character;
  return subject.join ("");
}

do {
  omission = false;
  straight = false;
  pairs = false;
  increment = false;

  // Increment from the right
  for (var x = input.length - 1; x >= 0; x --) {
    if (input [x] == "z") {
      // Increment
      input = input.replaceAt (x, "a");
      increment = true;
    } else if (x == input.length - 1 || increment) {
      var code = input.charCodeAt (x);

      var letter = String.fromCharCode (code + 1);
      letter = letter == "i" ? "j" : letter;
      letter = letter == "l" ? "m" : letter;
      letter = letter == "o" ? "p" : letter;

      input = input.replaceAt (x, letter);
      break;
    }
  }

  // Check for omissions
  if (input.indexOf ("i") == -1 && input.indexOf ("l") == -1 && input.indexOf ("o") == -1) {
    omission = true;
  } else {
    continue;
  }

  // Check for pairs
  var pair = input.search (/([a-z])\1/);

  if (pair != -1) {
    var repeat = input.substring (pair + 2);

    pair = repeat.search (/([a-z])\1/);

    if (pair != -1) {
      pairs = true;
      // console.log ("pairs");
    } else continue;
  } else continue;

  // Check for straights
  for (var x = 0; x < input.length - 2; x ++) {
    var code = input.charCodeAt (x);
    if (input.charCodeAt (x + 1) == code + 1 && input.charCodeAt (x + 2) == code + 2) {
      straight = true;
      // console.log ("straight");
      break;
    }
  }
} while (!straight || !omission || !pairs);

console.log (input);
alert (input); // cqkaabcc