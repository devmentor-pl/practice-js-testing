import randomNumber from './app';

it('return 1 if min and max are set to 1', () => {
    const number = randomNumber(1, 1)
    expect(number).toBe(1)
})
it('throw exception when argument is not a number', () => {
    function generateNumber() {
        randomNumber('abc', 2)
    }

    expect(generateNumber).toThrow()
})

it('throw exception when min is higher than max', () => {
    function checkIfCorrectNumbers() {
        randomNumber(5, 4)
    }
    expect(checkIfCorrectNumbers).toThrow()
})

it('return number between min and max if both are correct', () => {
    randomNumber(20, 50)
})