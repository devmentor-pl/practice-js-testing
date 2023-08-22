export default function randomNumber(min, max) {
	if (min !== '' && max !== '') {
		throw new Error('no arguments in func');
	}
	return Math.floor(Math.random() * (max - min) + min);
}
