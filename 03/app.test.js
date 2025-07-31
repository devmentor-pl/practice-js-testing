import randomNumber from './app';

describe('Range', () => {
    it('Should throw exception when min not a number', () => {
        function checkNumber() {
            randomNumber('2')
        }
        expect(checkNumber).toThrow()
    })

    it('Should throw exception when min not a number', () => {
        function checkNumber() {
            randomNumber(NaN)
        }
        expect(checkNumber).toThrow()
    })

    it('Should inform when min is not a number', () => {
        try {
            randomNumber('5', 1)
        } catch (err) {
            expect(err.message).toBe('min must be a number')
        }
    })

    it('Should throw exception when max is not a number', () => {
        function checkNumber() {
            randomNumber(5, '1')
        }
        expect(checkNumber).toThrow()
    })

    it('Should inform when max is not a number', () => {
        try {
            randomNumber(5, '10')
        } catch (err) {
            expect(err.message).toBe('max must be a number')
        }
    })

    it('Should throw exceptation when valid range', () => {
        function checkRange() {
            randomNumber(5, 3)
        }
        expect(checkRange).toThrow()
    })

    it('Should inform when valid range', () => {
        try {
            randomNumber(5, 2)
        } catch (err) {
            expect(err.message).toBe('Max value must be grater than min')
        }
    })
})

describe('Drawing number', () => {
    it('Return number greater than 5 and less than 10', () => {
        const number = randomNumber(5, 10);
        expect(number).toBeGreaterThan(5);
        expect(number).toBeLessThanOrEqual(10);
    })
})