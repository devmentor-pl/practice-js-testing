import randomNumber from './app';

describe('check range', () => {
    it('if value min & value max are equal to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });

    it('if min > max', () => {
        function checkNumbers() {
            const min = 10;
            const max = 5;
            randomNumber( min, max);
        }
        expect(checkNumbers).toThrow('value of min cannot be greater than value of max');
    });

    it('if given value is not a number', () => {
        function checkNumbers() {
            const min = 'abc';
            const max = 'xyz';
            randomNumber(min, max)
        }
        expect(checkNumbers).toThrow('given value is not a number')
    });
});

describe('check if fits given range', () => {
    it('if given numbers are between 1 and 10', () => {
        const num = randomNumber(1, 10);
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(10);
    });
});