import randomNumber from './app'

describe('random number', () => {
	it('check if number is between min and max', () => {
		const min = 1
		const max = 10
		const result = randomNumber(min, max)
		expect(result).toBeGreaterThanOrEqual(min)
		expect(result).toBeLessThanOrEqual(max)
	})
	it('will be 1 when min = 1 and max = 1 result ', () => {
		expect(randomNumber(1, 1)).toBe(1)
	})

	it('check if max is greater than min', () => {
		expect(() => randomNumber(4, 2)).toThrow('Min musi być mniejsze lub równe max')
	})
	it('throws an error if min is not a number', () => {
		expect(() => randomNumber('not a number', 5)).toThrow('Wartość musi być liczbą')
	})
	it('throws an error if max is not a number', () => {
		expect(() => randomNumber(1, 'not a number')).toThrow('Wartość musi być liczbą')
	})
	it('throws an error if min and max are not a numbers', () => {
		expect(() => randomNumber('not a number', 'not a number')).toThrow('Wartość musi być liczbą')
	})
})
