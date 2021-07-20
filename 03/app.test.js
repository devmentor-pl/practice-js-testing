import randomNumber from './app';

it('return 1 when min, max is 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});