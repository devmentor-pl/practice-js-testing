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