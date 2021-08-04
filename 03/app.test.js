import randomNumber from './app';

it('returns 1 from the range 1 - 1', () => {
    expect(randomNumber(1,1)).toBe(1);
})