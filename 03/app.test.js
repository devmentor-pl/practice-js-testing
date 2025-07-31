import randomNumber from './app';

describe('randomNumber', () => {

    it('return 1 when min = 1 and max = 1', () => {
        expect(randomNumber(1,1)).toBe(1);
    })

    it('throw exception when max is not a number', () => {
        expect(() => randomNumber(1, '2')).toThrow('Property max have to be a number!');
    })

    it('throw exception when min is not a number', () => {
        expect(() => randomNumber('1', 2)).toThrow('Property min have to be a number!');
    })

    it('throw exception when min > max', () => {
        expect(() => randomNumber(3, 1)).toThrow('Max has to be greater than Min!');
    })

    it('random number is between min and max props', () => {
        const result = randomNumber(1, 5);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(5);
    })

})
