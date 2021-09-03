import randomNumber from './app';

it('Should throw exception when min not a number', () => {
    function checkNumber() {
        randomNumber('1')
    }
    expect(checkNumber).toThrow()
})

it('Should throw exception when max is not a number', () => {
    function checkNumber() {
        randomNumber(5, '1')
    }
    expect(checkNumber).toThrow()
})

it('Should throw exceptation when valid range', () => {
    function checkRange() {
        randomNumber(5, 3)
    }
    expect(checkRange).toThrow()
})

it('Return number greater than 5 and less than 10', () => {
    const number = randomNumber(5, 10);
    expect(number).toBeGreaterThan(5);
    expect(number).toBeLessThan(10);
})