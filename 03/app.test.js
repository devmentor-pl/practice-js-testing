import randomNumber from './app';

it('throw exception when no arguments are passed', () => {
  function getRandomNum() {
    randomNumber()
  }
  expect(getRandomNum).toThrow()
}) 

it('throw exception when arg1 is greater than arg2', () => {
  function getRandomNum() {
    randomNumber(3, 1)
  }
  expect(getRandomNum).toThrow('First argument must be lesser than the second one.')
})