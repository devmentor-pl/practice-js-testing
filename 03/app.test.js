import randomNumber from './app';



describe('Test randomNumber()', () => {
    it('check if the number is defined ', () => {
        const result = randomNumber(3, 200);
        expect(result).toBeDefined();
    })
    it('check if the number is  between 1 and 200 ', () => {
        const result = randomNumber(1, 200);
        expect(result).toBeTruthy();
    })
    it('check if the number 70 is in the range 50-100 ', () => {
        const result = randomNumber(50,100);
        expect(result).toBeGreaterThanOrEqual(50);
        expect(result).toBeLessThanOrEqual(100);
    })
    it('check if the number 15 is less than 100 ', () => {
        const result = randomNumber(15, 100);
        expect(result).toBeLessThan(100)
       
    })
    it('return true if the number is greater than 100 ', () => {
        const result = randomNumber(110, 120);
        expect(result).toBeTruthy();
    })

    /* to jest bez sensu tak ? */

    // it('check if this object is NaN', () => {
    //     const result = randomNumber();
    //     expect(NaN).toBeNaN();
    // })
    // it('check if this number is null', () => {
    //     const result = randomNumber();
    //     expect(null).toBeNull()
    // }) 

    it('check if the number is undefined', () => {
        const result = randomNumber();
        expect(undefined).toBeUndefined();

    })



})