import randomNumber from './app';

it('throw exception when no arguments are passed', () => {
  function getRandomNum() {
    randomNumber()
  }
  expect(getRandomNum).toThrow()
}) 