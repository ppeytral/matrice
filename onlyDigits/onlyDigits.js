function onlyDigits(sInput) {
	let iLength = sInput.length;

	for (let i = 0; i < iLength; i++) {
		if (!(sInput.charCodeAt(i) === 32 || sInput.charCodeAt(i) >= 48 && sInput.charCodeAt(i) <= 57))
			return false;
		i++;
	}
	return true;
}

module.exports = onlyDigits;

/*
console.log(onlyDigits("666"));
console.log(onlyDigits("666 543 344"));
console.log(onlyDigits("a = 555"));
*/
