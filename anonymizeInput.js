function anonymizeInput(sInput) {
	let sResult = sInput;

	if (sInput.length > 4) {
		let sMask = "****";
		sResult = sMask + sInput.slice(4);
		}
	console.log(sResult);
}

module.exports = anonymizeInput;

/*
anonymizeInput("Patrice");
anonymizeInput("Test");
*/
