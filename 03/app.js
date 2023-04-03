export default function randomNumber(min, max) {
	if (min > max) {
		throw new Error('max value must be greater than min value');
	}
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('"min" or "max" value is not a number');
	}

	const number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}
