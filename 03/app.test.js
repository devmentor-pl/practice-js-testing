import randomNumber from './app';

it('return 1 if min and max are set to 1', () => {
    const number = randomNumber(1, 1)
    expect(number).toBe(1)
})
it('throw exception when argument is not a number', () => {
    expect(randomNumber(1, 'abc')).toThrow()
})