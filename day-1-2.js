var input = document.getElementsByTagName ("pre") [0].textContent;

var floor = 0;
var x;

for (x = 1; x < string.length; x ++) {
	if (string [x] == "(") floor ++;
	else floor --;

	console.log (floor);

	// Basement Floor == -1
	if (floor == -1) break;
}

console.log (x); // 1771
alert (x);