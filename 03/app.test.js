import randomNumber from './app';

describe('RandomNumber', () => {
    it('should return value of argument when arguments are the same number', () => {
        expect(randomNumber(5,5)).toBe(5);

    });

    it('should throw exception when any of args isnt a number', () => {
        const arg1 = '';
        const arg2 = [];
        expect(function(){randomNumber(arg1, arg2)}).toThrow('Property has to be a number');
    });

    it
})