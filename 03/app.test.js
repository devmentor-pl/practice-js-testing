import randomNumber from './app';

test('min = 1 and max = 1 return 1', () => {
    expect(randomNumber(10, 10)).toBe(10)
})