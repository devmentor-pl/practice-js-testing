import randomNumber from './app';
describe('randomNumber', ()=> {
    it('should return 1 when min and max are both defined as 1', () => {
        const result = randomNumber(1,1)
        expect(result).toBe(1);
    })
    it('should throw an error when NaN value is provided', ()=>{
        expect(() => randomNumber('abc', 5)).toThrowError('Both min and max must be numbers.');
        expect(() => randomNumber(2, 'xyz')).toThrowError('Both min and max must be numbers.');
        expect(() => randomNumber('abc', 'xyz')).toThrowError('Both min and max must be numbers.');
    } )
    it('should throw an error when min is greater than max', ()=> {
        expect(()=> randomNumber(4,3)).toThrowError('Min must be smaller or equal to max')
    })
    it('should return a number within the range', ()=>{
        const min = 3
        const max = 8
        const result =  randomNumber(min, max)
        expect(result).toBeGreaterThanOrEqual(min)
        expect(result).toBeLessThanOrEqual(max)
    })
})