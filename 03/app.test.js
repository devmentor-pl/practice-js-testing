import randomNumber from './app';

it('return 1 when min and max are 1', () => {
	const result = randomNumber(1, 1);
	expect(result).toBe(1);
});
