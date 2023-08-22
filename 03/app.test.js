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
});
