import randomNumber from './app';

it('Return 1 when min and max is 1', () => {
  const calc = randomNumber(1, 1);
  expect(calc).toBe(1);
});
