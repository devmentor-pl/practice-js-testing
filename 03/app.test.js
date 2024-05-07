import randomNumber from './app';

describe('randomNumber(min, max)', () => {
  it('returns 1 if min >= 1 and max <= 1', () => {
    const min = 1;
    const max = 1;
    expect(randomNumber(min, max)).toBe(1);
  })

  describe('if arguments are not numbers throw an error', () => {
    it('min is not a number', () => {
      const min = "not a number";
      const max = 1;
      expect(() => randomNumber(min, max)).toThrow();
    })
    
    it('max is not a number', () => {
      const min = 1;
      const max = 'not a number';
      expect(() => randomNumber(min, max)).toThrow();
    })
  })
})