import randomNumber from './app';

describe('RandomNumber', () => {
    it('return 1 if min and max value = 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });

    it('throw exception when min value is not a number', () => {
        expect(() => {
            randomNumber('some string', 2);
        }).toThrow('Minimum value should be a number!');
    });

    it('throw exception when max value is not a number', () => {
        expect(() => {
            randomNumber(2, 'some string');
        }).toThrow('Maximum value should be a number!');
    });

    it('throw exception when min value is greater than max value', () => {
        expect(() => {
            randomNumber(4, 3);
        }).toThrow('Invalid range!');
    });

    it('return true if result is between range', () => {
        const a = 1;
        const b = 15;
        const result = randomNumber(a, b);

        const isValueBetweenRange = () => {
            if (result >= a && result <= b) return true;
            else return false;
        }

        expect(isValueBetweenRange()).toBeTruthy();
    });
});