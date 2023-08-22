export default function randomNumber(min, max) {
	if (isNaN(min) && isNaN(max)) {
		throw new Error('no arguments in func');
	} else if (min > max) {
		throw new Error('min cannot be higher than max');
	}
	return Math.floor(Math.random() * (max - min) + min);
}
