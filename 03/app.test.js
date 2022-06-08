import randomNumber from './app';

describe('randomNumber()', () => {
    it(`if no arguments, throw error information`, () => {
        expect(() => { randomNumber() }).toThrow();
    });
    it(`one agrument, throw error information`, () => {
        expect(() => { randomNumber(3) }).toThrow()
    });
    it(`ones of the arguments is not a number, throw error information`, () => {
        expect(() => { randomNumber('d', 2) }).toThrow()
    })
});