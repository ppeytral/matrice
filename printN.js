function isEven(n) {
	if (n % 2 === 0)
		return true;
	else
		return false;
}

function printNTimes(str, n) {
	for (let i = 0; i < n; i++) {
		console.log(str);
	}
}


function printN(str, n){
	let iLength = str.length;

	if (iLength >= 2) {
		if (isEven(n)) {
			printNTimes(str.slice(iLength - 2), n);
		}
		else {
			printNTimes(str.slice(0, 2), n);
		}
	}
}

module.exports = isEven;
module.exports = printNTimes;
module.exports = printN;

printN("bottle", 4);
printN("bottle", 5);
