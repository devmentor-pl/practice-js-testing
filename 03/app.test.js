import randomNumber from './app';

it('return 1 when the number to be drawn is between 1 and 1', () => {
    const min = 1;
    const max = 1;
    const result = randomNumber(min, max);

    expect(result).toBe(1);
});