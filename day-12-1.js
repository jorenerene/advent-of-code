var input = document.getElementsByTagName ("pre") [0].textContent;

input = JSON.parse (input);

var total = 0;

function iterate (subject) {
  if (subject instanceof Array) {
    for (var x = 0; x < subject.length; x ++) {
      if (!isNaN (subject [x])) {
        total += parseInt (subject [x]);
      } else if (subject [x] instanceof Array || typeof subject [x] == "object") {
        iterate (subject [x]);
      }
    }
  } else if (typeof subject == "object") {
    for (var x in subject) {
      if (!isNaN (subject [x])) {
        total += parseInt (subject [x]);
      } else if (subject [x] instanceof Array || typeof subject [x] == "object") {
        iterate (subject [x]);
      }
    }
  }
}

for (var i = 0; i < input.length; i ++) {
  if (!isNaN (input [i])) {
    total += parseInt (input [i]);
  } else if (input [i] instanceof Array || typeof input [i] == "object") {
    iterate (input [i]);
  }
}

console.log (total);
alert (total); // 156366