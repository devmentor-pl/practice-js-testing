import randomNumber from './app';

test('returns 1 when random number is in the range from 1 to 1', () => {
    const result = randomNumber(1, 1)
    expect(result).toBe(1)
})