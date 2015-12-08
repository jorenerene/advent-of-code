var input = document.getElementsByTagName ("pre") [0].textContent;

// http://stackoverflow.com/questions/1376440/javascript-replacing-the-escape-character-in-a-string-literal
// Manipulate escaped literals FIRST
input = input.replace (/\\x[0-9A-F]{2}/gi,"####"); // Hex
input = input.replace (/\\"/g,"@@"); // Quote
input = input.replace (/\\\\/g,"~~"); // Backslash

input = input.split ("\n");

var code = 0;
var string = 0;

for (var i = 0; i < input.length - 1; i ++) {
  // input.length - 1 refers to trailing newline

  code += input [i].length;

  input [i] = input [i].replace (/####/g,"#");
  input [i] = input [i].replace (/@@/g,"@");
  input [i] = input [i].replace (/~~/g,"~");

  string += (input [i].length - 2); // Subtract surrounding quotation marks
}

console.log (code - string);
alert (code - string); // 1355