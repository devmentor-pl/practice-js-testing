import randomNumber from './app';

it('returns 1 when random number is in the range from 1 to 1', () => {
    const result = randomNumber(1, 1)
    expect(result).toBe(1)
})

it('throw exception when first argument is not a number', () => {
    function getRandomNumber() {
        const result = randomNumber('1', 1)
    }

    expect(getRandomNumber).toThrow()
})