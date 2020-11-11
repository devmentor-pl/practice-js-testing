import randomNumber from './app';

describe('arguments', () => {
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

  it('throw exception when arg1 is not a number', () => {
    function getRandomNum() {
      randomNumber('notANumber', 1)
    }
    expect(getRandomNum).toThrow('Argument must be a number.')
  })

  it('throw exception when arg2 is not a number', () => {
    function getRandomNum() {
      randomNumber(1, 'notANumber')
    }
    expect(getRandomNum).toThrow('Argument must be a number.')
  })  
})

describe('randomNumber', () => {
  it('should return an integer', () => {
    const value = randomNumber(-5.6, 7.8);
    expect(Number.isInteger(value)).toBeTruthy()
  })
})

