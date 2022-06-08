import randomNumber from './app';

describe('randomNumber()', () => {
    it(`if no arguments, then expect error information`, () => {
        expect(() => { randomNumber() }).toThrow()
    });
});