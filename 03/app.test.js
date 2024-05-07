import randomNumber from './app';

describe('randomNumber(min, max)', () => {
  it('returns 1 if min >= 1 and max <= 1', () => {
    const min = 1;
    const max = 1;
    expect(randomNumber(min, max)).toBe(1);
  })
})