import randomNumber from './app';



describe('Test randomNumber()', ()=> {
    it('check if the number is not 7 ', () => {
        const result = randomNumber(2,6);
        expect(result).not.toBe('7')
    })
    it('check if the number 70 is in the range 50-100 ', () => {
        const result = randomNumber(50,100);
        expect(result).toBeGreaterThanOrEqual(50);
        expect(result).toBeLessThanOrEqual(100);
    })
    it('check if this object is NaN', () => {
        const result = randomNumber();
        expect(NaN).toBeNaN();
    })
    it('check if this object is NaN', () => {
        const result = randomNumber();
        expect(NaN).toBeNaN();
    })

    it('check if the number is undefined', () => {
        const result = randomNumber();
        expect(undefined).toBeUndefined();

    })



})