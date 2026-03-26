import randomNumber from './app';

describe('randomNumber(min, max)', () => {
  it('returns 1 if min and max properties are set to 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
  })
  it('throws an error if min property is not a number', () => {
    expect(() => randomNumber('1', 1)).toThrow(new Error('Zły typ danych w parametrze min'))
  })
  it('throws an error if max property is not a number', () => {
    expect(() => randomNumber(1, '1')).toThrow(new Error('Zły typ danych w parametrze max'))
  })
  it('throws an error if min > max', () => {
    expect(() => randomNumber(2, 1)).toThrow(new Error('Źle ustawiony zakres funkcji randomNumber()'))
  })
  it('returns true if random number value is in the range', () => {
    const result = randomNumber(1, 10);
    expect(result >= 1 && result <= 10).toBe(true)
  })
})