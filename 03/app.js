function validateRange(min, max) {
	if (typeof min !== 'number') {
		throw new Error('Argument min must be a number');
	}
	if (typeof max !== 'number') {
		throw new Error('Argument max must be a number');
	}

	if (min > max) {
		throw new Error('Min cannot be greater than max');
	}
}

export default function randomNumber(min, max) {
	validateRange(min, max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
