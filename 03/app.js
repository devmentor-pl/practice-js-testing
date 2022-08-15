export default function randomNumber(min, max) {
	checkIfIsANumber(min, max);
	if (min > max) {
		throw new Error("Min is greater than max");
	}
	return Math.floor(Math.random() * (max - min) + min);
}
function checkIfIsANumber(min, max) {
	if (typeof min !== "number" || typeof max !== "number") {
		throw new Error("Min or max is not a number");
	}
}