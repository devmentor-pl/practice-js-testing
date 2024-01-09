import randomNumber from './app';

it('return 1 when min and max is equal to 1', () => {
  const result = randomNumber(1, 1);
  expect(result).toBe(1);
});

it('throw exception when prop max is not a number', () => {
  function createRandomNum() {
    randomNumber(1, 'x');
  }
  expect(createRandomNum).toThrow('Property have to be a number');
});
