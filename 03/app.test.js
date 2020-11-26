import randomNumber from './app';

it('throw exception when min is not a number', () => {
    function callRandomNumber() {
        randomNumber('3', 4)
    }
        expect(callRandomNumber).toThrow()
})

it('throw exception when max is not a number', () => {
    function callRandomNumber() {
        randomNumber(3, '4')
    }
        expect(callRandomNumber).toThrow()
})

it('throw exception when max <= min', () => {
    function callRandomNumber() {
        randomNumber(4, 3)
        randomNumber(4, 4)
    }
        expect(callRandomNumber).toThrow()
})

it('if min and min and max are OK, return number random number between min and max', () => {
    const min = 3
    const max = 4
    const result = randomNumber(min, max)
    expect(result).toBeGreaterThanOrEqual(min)
    expect(result).toBeLessThan(max)
})