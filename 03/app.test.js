import randomNumber from './app';

test('min = 1 and max = 1 return 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
})

test('Throw exception when min is not a number', () => {
    function callRandomNumber() {
        randomNumber('1')
    }

    expect(callRandomNumber).toThrow()
})