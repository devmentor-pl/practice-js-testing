import randomNumber from './app';

it('return 1 if min = 0 and max = 0', () => {
    expect(randomNumber(1, 1)).toBe(1)
})