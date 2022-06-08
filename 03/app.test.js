import randomNumber from './app';

describe('randomNumber()', () => {
    it(`if no arguments, throw error information`, () => {
        expect(() => { randomNumber() }).toThrow();
    });
    it(`one agrument, throw error information`, () => {
        expect(()=>{randomNumber(3)}).toThrow()
    })
});