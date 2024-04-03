import randomNumber from './app';

test('randomNumber should return a number', () => {
  expect(typeof randomNumber(1, 10)).toBe('number');
});