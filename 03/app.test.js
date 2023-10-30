import randomNumber from './app';

it('Return 1 when min and max is 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('Throw an error when a non-number is provided', () => {
  expect(() => {
    randomNumber('X', 1).toThrow();
  });
});
