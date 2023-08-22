import randomNumber from './app';

describe('RandomNumber', () => {
	it('return error when func has no argumnets', () => {
		expect(() => randomNumber()).toThrow();
	});
	it('return error when func has no number arguments', () => {
		const ar1 = 'x';
		const ar2 = 'yb';
		expect(() => randomNumber(ar1, ar2)).toThrow();
	});
	it('return 1 when arguments are 1,1', () => {
		const result = randomNumber(1, 1);
		expect(result).toBe(1);
	});
	it('the range is excluded', () => {
		expect(() => randomNumber(5, 1)).toThrow();
	});
});
