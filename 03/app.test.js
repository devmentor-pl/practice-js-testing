import randomNumber from './app';

describe('randomNumber()', () => {
    it(`if no arguments, throw error information`, () => {
        expect(() => { randomNumber() }).toThrow();
    });
});