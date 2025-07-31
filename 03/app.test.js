import randomNumber from './app';

describe('randomNumber', () => {
    it('should return the only possible number when the range is from 1 to 1', () => {
        const result = randomNumber(1, 1);
        expect(result).toBe(1);
    });
    it('should throw an error when non-numeric arguments are provided', () => {
        expect(() => {
            randomNumber('a', 5);
        }).toThrow('Arguments must be numbers');
    });
    it('should throw an error when the minimum value is greater than the maximum value', () => {
        expect(() => {
            randomNumber(5, 3);
        }).toThrow('Minimum value cannot be greater than maximum value');
    });
    it('should return a random number within the specified range', () => {
        const min = 3;
        const max = 7;
        const result = randomNumber(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });
});