import randomNumber from './app';

it('return 1 when min and max is equal to 1', () => {
  const result = randomNumber(1, 1);
  expect(result).toBe(1);
});

it('throw exception when prop min is not a number', () => {
  function createRandomNum() {
    randomNumber('x', 1);
  }
  expect(createRandomNum).toThrow('Property min have to be a number');
});

it('throw exception when prop max is not a number', () => {
  function createRandomNum() {
    randomNumber(1, 'x');
  }
  expect(createRandomNum).toThrow('Property max have to be a number');
});

it('throw exception when prop min is greater than max', () => {
  function checkNumbers() {
    randomNumber(4, 3);
  }
  expect(checkNumbers).toThrow('min number is grater than max');
});

it('return true if randomNumber falls within the specified range', () => {
  const result = randomNumber(1, 6);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(6);
});
