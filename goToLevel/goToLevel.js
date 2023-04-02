function goToLevel(iCurrFloor, iDestFloor) {
	if (fnFloorIsValid(iCurrFloor) && fnFloorIsValid(iDestFloor)) {
		return (iDestFloor - iCurrFloor);
	}
	else
		return 0;
}

function fnFloorIsValid(iFloor) {
	if (iFloor >= 0 && iFloor < 20)
		return true;
	else
		return false;
}

module.exports = goToLevel;
module.exports = fnFloorIsValid;

/*
console.log(goToLevel(0, 3));
console.log(goToLevel(10, 3));
console.log(goToLevel(4, 0));
console.log(goToLevel(10, 24));
*/
