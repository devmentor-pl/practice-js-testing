export default function randomNumber(min, max) {
	if (typeof min !== 'number' || typeof max !== 'number') {
		throw new Error('Wartość musi być liczbą')
	} else if (min > max) {
		throw new Error('Min musi być mniejsze lub równe max')
	} else {
		const result = Math.floor(Math.random() * (max - min + 1)) + min
		return result
	}
}
