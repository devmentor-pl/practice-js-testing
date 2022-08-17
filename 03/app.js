export default function randomNumber(min, max) {
	checkIfIsANumber(min, max);
	checkLowerAndUpperLimit(min, max);
	return Math.floor(Math.random() * (max - min) + min);
}
function checkIfIsANumber(min, max) {
	if (typeof min !== "number") {
		throw new Error("Min limit is not a number");
	}
	if (typeof max !== "number") {
		throw new Error("Max limit is not a number");
	}
}
function checkLowerAndUpperLimit(min, max) {
	if (min > max) {
		throw new Error("Min is greater than max");
	}
}