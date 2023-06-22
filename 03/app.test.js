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

test('Throw exception when max is not a number', () => {
    function callRandomNumber() {
        randomNumber(undefined, '1')
    }

    expect(callRandomNumber).toThrow()
})

test('Incorrectly defined range - from 4 to 3', () => {
    function callRandomNumber() {
        randomNumber(4, 3)
    }

    expect(callRandomNumber).toThrow()
})