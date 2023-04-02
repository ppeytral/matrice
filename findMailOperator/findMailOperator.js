function findMailOperator(sMail) {
	let iOperatorStart = sMail.indexOf("@") + 1;
	let iOperatorEnd = iOperatorStart + sMail.slice(iOperatorStart).indexOf(".");
	console.log(sMail.slice(iOperatorStart, iOperatorEnd));
}

module.exports = findMailOperator;

/*
findMailOperator("p.peytral@gmail.com");
findMailOperator("laurie@rbean.io");
*/
