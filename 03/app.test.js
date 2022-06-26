import randomNumber from './app';

it('return 1 if min = 1 and max = 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
})

it('throw error if min is not a number', () => {
    expect( () => randomNumber('a', 1) ).toThrow('"min" must be a number')
})