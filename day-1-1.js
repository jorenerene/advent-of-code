var input = document.getElementsByTagName ("pre") [0].textContent;

var floor = 0;

for (var x = 0; x < input.length; x ++) {
	if (input [x] == "(") floor ++;
	else floor --;
}

console.log (floor); // 138
alert (floor);