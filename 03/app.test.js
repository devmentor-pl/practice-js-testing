import randomNumber from './app';

it('randomizes a number from 1 to 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('throw error when one of arguments is not a number', () => {
  expect(() => randomNumber('1', 1)).toThrow();
});
