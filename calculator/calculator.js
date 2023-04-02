function calculator(iArg1, iArg2, sOperator) {
	switch (sOperator) {
		case '+':
			console.log("The result of " + iArg1 + " + " + iArg2 + " = " + (iArg1 + iArg2));
			break;
		case '-':
			console.log("The result of " + iArg1 +  "- " + iArg2 + " = " + iArg1 - iArg2);
			break;
		case '*':
			console.log("The result of " + iArg1 + " * " + iArg2 + " = " + iArg1 * iArg2);
			break;
		case '/':
			if (iArg2 !== 0) {
				console.log("The result of " + iArg1 + " / " + iArg2 + " = " + iArg1 / iArg2);
			}
		default:
	}
}


module.exports = calculator;

calculator(20, 10, "+");
calculator(20, 10, "/");
calculator(20, 10, "*");
calculator(20, 10, "e");
calculator(20, 0, "/");
