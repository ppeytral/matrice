function toNato(sInput) {
	const hNato = {
		a: "Alfa",
		b: "Bravo",
		c: "Charlie",
		d: "Delta",
		e: "Echo",
		f: "Foxtrot",
		g: "Golf",
		h: "Hotel",
		i: "India",
		j: "Juliett",
		k: "Kilo",
		l: "Lima",
		m: "Mike",
		n: "November",
		o: "Oscar",
		p: "Papa",
		q: "Quebec",
		r: "Romeo",
		s: "Sierra",
		t: "Tango",
		u: "Uniform",
		v: "Victor",
		w: "Whiskey",
		x: "Xray",
		y: "Yankee",
		z: "Zulu"
	};
	let sResult = "";
	let sBuffer = sInput.toLowerCase();
	let iLength = sBuffer.length;

	for (let i = 0; i < iLength; i++) {
		if (sBuffer[i] in hNato )
			sResult += hNato[sBuffer[i]];
		else if (sBuffer[i] !== " ")
			sResult += sBuffer[i];
	}
	return sResult;
}

module.exports = toNato;

/*
console.log(toNato("Patrice"));
console.log(toNato("Hi, I am Patrice"));
*/
