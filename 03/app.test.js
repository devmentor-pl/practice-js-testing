import randomNumber from './app';

it('return 1 if min=w and max=1', () => {
	expect(randomNumber(1, 1)).toBe(1);
});
