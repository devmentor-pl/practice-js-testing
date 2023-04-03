export default function randomNumber(min, max) {
	if (typeof min !== "number") {
		throw new Error("Min has to be a number");
	}
	return Math.floor(Math.random() * (max - min)) + min;
}
