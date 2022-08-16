import randomNumber from './app';

it('return 1 when min and max are 1', () => {
	const result = randomNumber(1, 1);
	expect(result).toBe(1);
});

it('throws error if min is Nan', () => {
	expect(() => {
		randomNumber('1', 1)}).toThrow('Min is not a number');
});

it('throws error if max is Nan', () => {
	expect(() => {
		randomNumber(1, '1')}).toThrow('Max is not a number');
});

it('throws error if max is lower than min', () => {
    expect(() => {
        randomNumber(2, 1);
    }).toThrow('Max cannot be smaller than min');
});
