import randomNumber from './app';

it('randomizes a number from 1 to 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('throw error when one of arguments is not a number', () => {
  expect(() => randomNumber('1', 1)).toThrow();
});
it('throw error when min number is bigger than max number', () => {
  expect(() => randomNumber(2, 1)).toThrow();
});
