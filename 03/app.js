export default function randomNumber(min, max) {
	if (typeof min !== "number") {
		throw new Error("Min and max have to be numbers");
	}
	return Math.floor(Math.random() * (max - min)) + min;
}
