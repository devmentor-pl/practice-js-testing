import randomNumber from './app';

describe('randomNumber', () =>{
  it('return 1 when range 1-1', () => {
    const result = randomNumber(1,1);
    expect(result).toBe(1)
  })
  it('throw error when range is NaN', () => {
    function runRandomNumber() {
      randomNumber('test')
    }
    expect(runRandomNumber).toThrow()
  })
  it('throw error when min > max', () => {
    function runRandomNumber() {
      randomNumber(4,3)
    }
    expect(runRandomNumber).toThrow()
  })
  it('return number from range min-max', () => {
    const min = -10;
    const max = -1;
    const numberOfTry = 1000;

    for (let i = 0; i < numberOfTry; i++) {
      const result = randomNumber(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  })
})