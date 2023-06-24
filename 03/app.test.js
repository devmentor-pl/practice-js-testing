import randomNumber from './app';

it('return 1 if min=1 and max=1', () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it('if min is not a number throw error', () => {
  expect(() => randomNumber('1', 2)).toThrow('min is not a number');
});

it('if max is not a number throw error', () => {
  expect(() => randomNumber(1, '2')).toThrow('max is not a number');
});

it('throws an error if the range is mutually exclusive', () => {
  expect(() => randomNumber(4, 3)).toThrow('range is mutually exclusive');
});
