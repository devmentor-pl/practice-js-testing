import randomNumber from './app';

describe('randomNumber', () => {
    describe('Prop no.1', () => {
        it('return 0 if Prop is not set', () => {
            const result = randomNumber()
            expect(result).toBe(0)
        })
        it('throw exeption when prop is not a number', () => {
            function rndNmb() {
                const result = randomNumber('not a number')
            }
            expect(rndNmb).toThrow()
        })
    })
    describe('Prop no.2', () => {
        it('throw exeption when Prop is not a number', () => {
            function rndNmb() {
                const result = randomNumber('not a number')
            }
            expect(rndNmb).toThrow()
        })
        it('throw exeption when prop2 =< prop1', () => {
            function rndNmb() {
                const result = randomNumber(4, 2)
            }
            expect(rndNmb).toThrow()
        })
    })
    describe('Math.random', () => {
        it('return value equal or smaller than max', () => {
            const result = randomNumber(10, 100)
            expect(result <= 100).toBe(true)
        })
        it('return value equal or larger than min', () => {
            const result = randomNumber(10, 100)
            expect(result >= 10).toBe(true)
        })
        it('return value equal max if max=min', () => {
            const result = randomNumber(10, 10)
            expect(result).toBe(10)
        })
    })


})