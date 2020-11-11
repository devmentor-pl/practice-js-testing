import randomNumber from './app';

it('throw exception when no arguments are passed', () => {
  function getRandomNum() {
    new randomNumber();
  }
  expect(getRandomNum).toThrow()
}) 