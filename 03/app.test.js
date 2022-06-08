import randomNumber from './app';

describe('randomNumber()', () => {
    it(`if no arguments, throw error information`, () => {
        expect(() => { randomNumber() }).toThrow();
    });
    it(`one agrument, throw error information`, () => {
        expect(() => { randomNumber(3) }).toThrow();
    });
    it(`ones of the arguments is not a number, throw error information`, () => {
        expect(() => { randomNumber('d', 2) }).toThrow();
    });
    it(`if arguments value is 1, we wont to expect 1`, () => {
        expect(randomNumber(1, 1)).toBe(1);
    });
    it(`first argument is greater then second one, throw error information`, () => {
        expect(() => { randomNumber(4, 2) }).toThrow();
    })
    it(`if the arguments are passed correctly, show the right value`, () => {
        expect(randomNumber(1, 5)).toBeTruthy();
    })
});