export default function randomNumber(min, max) {
	if (isNaN(min)) {
		throw new Error('min value is not a number');
	}

	if (isNaN(max)) {
		throw new Error('max value is not a number');
	}

	if (min > max) {
		throw new Error('max value must be greater than min value');
	}

	const number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}
