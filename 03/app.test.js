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
})