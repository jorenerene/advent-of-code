var input = document.getElementsByTagName ("pre") [0].textContent;

// http://stackoverflow.com/questions/1376440/javascript-replacing-the-escape-character-in-a-string-literal
// Manipulate escaped literals FIRST
input = input.replace (/\\x[0-9A-F]{2}/gi,"####"); // Hex
input = input.replace (/\\"/g,"@@"); // Quote
input = input.replace (/\\\\/g,"~~"); // Backslash

input = input.split ("\n");

var code = 0;
var encoded = 0;

for (var i = 0; i < input.length - 1; i ++) {
  // input.length - 1 refers to trailing newline

  code += input [i].length;

  // MATHEMATICAL LOGISTICS HACK
  input [i] = input [i].replace (/####/g,"#####");
  input [i] = input [i].replace (/@@/g,"@@@@");
  input [i] = input [i].replace (/~~/g,"~~~~");

  encoded += (input [i].length + 4); // MATHEMATICAL LOGISTICS HACK
}

console.log (encoded - code);
alert (encoded - code); // 2046