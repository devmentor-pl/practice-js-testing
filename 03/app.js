export default function randomNumber(min, max) {
	if (isNaN(min) && isNaN(max)) {
		throw new Error('no arguments in func');
	}
	return Math.floor(Math.random() * (max - min) + min);
}
