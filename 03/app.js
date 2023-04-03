export default function randomNumber(min, max) {
	if (min === max) {
		return 1;
	}

	if (typeof min !== "number" || typeof max !== "number") {
		throw new Error("Min and max have to be numbers");
	}

	if (min > max) {
		throw new Error("Value of min has to be smaller than value of max");
	}

	return Math.floor(Math.random() * (max - min)) + min;
}
