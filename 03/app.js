export default function randomNumber(min, max) {
	validateNumbers(min, max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validateNumbers(min, max) {
	if (min === max) {
		return max;
	}

	if (isNaN(min) === true) {
		throw new Error("Min has to be a number");
	}

	if (isNaN(max) === true) {
		throw new Error("Max has to be a number");
	}

	if (min > max) {
		throw new Error("Value of min has to be smaller than value of max");
	}
}
