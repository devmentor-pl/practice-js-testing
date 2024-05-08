import randomNumber from './app';

test('randomNumber should return a number', () => {
  expect(typeof randomNumber(1, 10)).toBe('number');
});

test('randomNumber should throw an error if argument is not a number', () => {
    expect(() => randomNumber('1', 10)).toThrow();
});

test('throws error when min is greater than max', () => {
    expect(() => randomNumber(2, 1)).toThrow();
});
test('random number should return a number 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});
test('returns a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
});