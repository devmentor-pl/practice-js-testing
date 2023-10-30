import randomNumber from './app';

it('Return 1 when min and max is 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('Throw an error when a non-number is provided', () => {
  expect(() => {
    randomNumber('X', 1).toThrow();
  });
});

it('Throw an error when min is greater than max', () => {
  expect(() => {
    randomNumber(4, 3).toThrow();
  });
});

it('Generate a random number within the specified range', () => {
  const min = 10;
  const max = 20;
  const result = randomNumber(min, max);
  expect(result).toBeGreaterThanOrEqual(min);
  expect(result).toBeLessThanOrEqual(max);
});
