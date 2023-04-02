function fnCreateMask(sInput) {
	let iLength = sInput.length;
	let sMask = "";

	for (let i = 0; i < iLength - 4; i++) {
		sMask += "*";
	}

	return sMask;
}

function anonymizeInput(sInput) {
	let sResult = sInput;

	if (sInput.length > 4) {
		sResult = fnCreateMask(sInput) + sInput.slice(sInput.length - 4);
		}
	console.log(sResult);
}

module.exports = anonymizeInput;
module.exports = fnCreateMask;

/*
anonymizeInput("Patrice");
anonymizeInput("Test");
anonymizeInput("he sees ghosts");
anonymizeInput("roses are red");
*/
