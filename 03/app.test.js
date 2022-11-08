import randomNumber from './app';

describe('RandomNumber', () => {
    it('should return value of argument when arguments are the same number', () => {
        expect(randomNumber(5,5)).toBe(5);

    });

    it('should throw exception when any of args isnt a number', () => {
        const min = '';
        const max = 6;
        expect(function(){randomNumber(min, max)}).toThrow('Property has to be a number');
    });

    it('should throw exception when max range is smaller than min range', () => {
        const min = 10;
        const max = 9;
        expect(function(){randomNumber(min, max)}).toThrow();
    })
})