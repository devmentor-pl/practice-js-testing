export default function randomNumber(min, max) {
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('Given number must be a number!');
	} else {
		return Math.random() * (max - min) + min;
	}
}
