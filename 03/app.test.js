import randomNumber from './app';

describe('RandomNumber', () => {
    it('return 1 if min and max = 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });

    it('throw exception when min is not a number', () => {
        expect(() => {
            randomNumber('some string', 2);
        }).toThrow();
    });

    it('throw exception when max is not a number', () => {
        expect(() => {
            randomNumber(2, 'some string');
        }).toThrow();
    });

    it('throw exception when min is bigger than max', () => {
        expect(() => {
            randomNumber(4, 3);
        }).toThrow();
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