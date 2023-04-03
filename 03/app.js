export default function randomNumber(min, max) {
	if (typeof min !== 'number') {
		throw new Error('Value "min" is not a number');
	}
	if (typeof max !== 'number') {
		throw new Error('Value "max" is not a number');
	}

	const number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}
