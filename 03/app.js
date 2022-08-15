export default function randomNumber(min, max) {
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('Min or max is not a number')
	}
	return Math.floor(Math.random() * (max - min) + min);
}
