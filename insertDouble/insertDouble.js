function insertDouble(sInput) {
	let iLength = sInput.length;
	let aLetters = ["n", "s", "l", "p"];
	let sResult = "";

	for (let i = 0; i < iLength; i++) {
		sResult = sResult += sInput[i];
		if (aLetters.includes(sInput[i]))
			sResult += sInput[i];
	}
	console.log(sResult);
}

module.exports = insertDouble;

insertDouble("now let's settle this!");
