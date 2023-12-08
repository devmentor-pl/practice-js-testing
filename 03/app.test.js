import randomNumber from './app';

const getRandomNumber = require('./app.js');

describe('should return one if min and max are set to 1', () => {
    const number = randomNumber(1, 1)
    expect(number).toBe(1)
})

describe('getRandomNumber', () => {
  it('should return a number', () => {
    const min = 1;
    const max = 100;
    const result = getRandomNumber(min, max);
    expect(typeof result).toBe('number');
  });
});

describe('getRandomNumber', () => {
    it('should return a number greater than or equal to min', () => {
      const min = 1;
      const max = 100;
      const result = getRandomNumber(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
    });
  });

  describe('getRandomNumber', () => {
    it('should throw an error when min is greater than max', () => {
      const invalidMin = 10;
      const invalidMax = 5;
      expect(() => getRandomNumber(invalidMin, invalidMax)).toThrowError('max value needs to be higher than min!');
    });
  });

  describe('getRandomNumber', () => {
    it('should throw an error when min is not a number', () => {
      const invalidMin = 'abc';
      const validMax = 100;
      expect(() => getRandomNumber(invalidMin, validMax)).toThrowError('minimal value is not a number!');
    });
  });

  describe('getRandomNumber', () => {
    it('should throw an error when min is greater than max', () => {
      const invalidMin = 10;
      const invalidMax = 5;
      expect(() => getRandomNumber(invalidMin, invalidMax)).toThrowError('max value needs to be higher than min!');
    });
  });