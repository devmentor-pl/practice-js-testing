import randomNumber from './app';



describe('Test randomNumber()', () => {
    it('check if the number is defined ', () => {
        const result = randomNumber(1, 1);
        expect(result).toBe(1);
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

})