import randomNumber from './app';

it('returns 1 when random number is in the range from 1 to 1', () => {
    const result = randomNumber(1, 1)
    expect(result).toBe(1)
})

it('throw exception when min property is not a number', () => {
    function getRandomNumber() {
        const result = randomNumber('1', 1)
    }

    expect(getRandomNumber).toThrow('Property "min" has to be a number') 
})

it('throw exception when max property is not a number', () => {
    function getRandomNumber() {
        const result = randomNumber(1, '1')
    }

    expect(getRandomNumber).toThrow('Property "max" has to be a number')
})

it('throw exception when min property is greater than max property', () => {
    function getRandomNumber() {
        const result = randomNumber(3, 2)
    }
    expect(getRandomNumber).toThrow('"Max" property has to be greater than "min" property')
})

it('random number is greater than min property and less or equal to max property', () => {
    const result = randomNumber(2, 4)
    expect(result).toBeGreaterThan(2)
    expect(result).toBeLessThanOrEqual(4)
})