import randomNumber from './app';

it('throw exception when no arguments are passed', () => {
  expect(randomNumber).toThrow()
}) 