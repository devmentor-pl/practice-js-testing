import randomNumber from './app';

describe('RandomNumber', () => {
	it('return error when func has no argumnets', () => {
		expect(() => randomNumber()).toThrowError('function should have two arguments');
	});
	it('return error when second arg is missing', () => {
		expect(() => randomNumber(1)).toThrowError('second arg is empty');
	});
	it('checking if the first argument is a number', () => {
		expect(() => randomNumber('k', 1)).toThrowError('First argument is not a number');
	});
	it('checking if the second argument is a number', () => {
		expect(() => randomNumber('3', 'a')).toThrowError('Second argument is not a number');
	});

	it('return 1 when arguments are 1,1', () => {
		const result = randomNumber(1, 1);
		expect(result).toBe(1);
	});
	it('the range is excluded when first number is higher than second', () => {
		expect(() => randomNumber(5, 1)).toThrowError('min cannot be higher than max');
	});
	it('number is in the range', () => {
		const result = randomNumber(1, 100);

		expect(result).toBeLessThanOrEqual(100);
		expect(result).toBeGreaterThanOrEqual(1);
	});
});
