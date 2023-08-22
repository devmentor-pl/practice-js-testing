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
        // trzeba wrzucic zmienna ktora przechowuje wynik, bo jak wrzuce funkcje z argumentami to nie przejdzie ~ zanotowane 
		expect(result).toBe(1);
	});
});
