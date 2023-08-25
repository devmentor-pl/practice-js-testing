export default function randomNumber(min, max) {
	if (typeof min === 'undefined') {
		throw new Error('function should have two arguments');
	}
	if (typeof max === 'undefined') {
		throw new Error('second arg is empty');
	}
	if (isNaN(min)) {
		throw new Error('First argument is not a number');
	}
	if (isNaN(max)) {
		throw new Error('Second argument is not a number');
	} else if (min > max) {
		throw new Error('min cannot be higher than max');
	}
	return Math.floor(Math.random() * (max - min) + min);
}
