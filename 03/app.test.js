import randomNumber from './app';

it('randomizes a number from 1 to 1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});
