import randomNumber from './app';

it('return 1 when min and max are 1', () => {
	const result = randomNumber(1, 1);
	expect(result).toBe(1);
});

it('throws error if number is Nan', () => {
	expect(randomNumber('1', 1).toThrow());
});

it('throws error if second number is Nan', () => {
	expect(randomNumber(1, '1').toThrow());
});
