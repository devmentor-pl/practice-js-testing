import randomNumber from './app';
describe('randomNumber', ()=> {
    it('should return 1 when min and max are both defined as 1', () => {
        const result = randomNumber(1,1)
        expect(result).toBe(1);
    })
    
})