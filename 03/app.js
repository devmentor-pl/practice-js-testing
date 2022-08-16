export default function randomNumber(min, max) {
	if (typeof min !== 'number') {
		throw new Error('Arg must be a number!');
	}

	if ( typeof max !== 'number') {
		throw new Error('Arg must be a number!');
	}

	if (min > max) {
		throw new RangeError('Max must be higher than min!');
	}

	return Math.random() * (max - min) + min;
}
