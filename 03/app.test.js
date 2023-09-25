import randomNumber from './app';

it('randomizes a number from 1 to 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('throw error when type of arguments is not a number', () => {
  expect(() => randomNumber('1b', 1)).toThrow(
    'The entered data must be numbers.'
  );
});
it('throw error when min number is bigger than max number', () => {
  expect(() => randomNumber(2, 1)).toThrow(
    "Min number can't be greater than max number."
  );
});
it('return a number from a specified range', () => {
  const min = 5;
  const max = 10;
  const randomNum = randomNumber(min, max);
  expect(randomNum).toBeGreaterThanOrEqual(min);
  expect(randomNum).toBeLessThanOrEqual(max);
});
