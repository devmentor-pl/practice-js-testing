import randomNumber from './app';

test('randomNumber should return a number', () => {
  expect(typeof randomNumber(1, 10)).toBe('number');
});

// Next test: If argument is not a number, it should throw an error
test('randomNumber should throw an error if argument is not a number', () => {
  expect(() => {
    randomNumber('a', 10);
  }).toThrow();
});