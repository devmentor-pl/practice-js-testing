export default function randomNumber(min, max) {
	if (typeof min !== 'number') {
		throw new Error('min must be a number');
	}
	if (typeof max !== 'number') {
		throw new Error('max must be a number');
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
