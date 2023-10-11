import randomNumber from './app';
describe('randomNumber', () => {
   it('return 1 when min and max is equal 1', () => {
      expect(randomNumber(1, 1)).toBe(1)
   })
   it('throw exception when both arguments are not a numbers', () => {
      expect(() => {
         randomNumber('2', '2').toThrow('Property have to be number')
      })
   })
   it('throw expection when first argument is not a number', () => {
      expect(() => {
               randomNumber('2', 2).toThrow('first argument have to be a number')
            })
   })
   it('throw expection when second argument is not a number', () => {
      expect(() => {
               randomNumber(2, '2').toThrow('second argument have to be a number')
            })
   })
   it('throw exception when min > max', () => {
      expect(() => {
         randomNumber(4, 3).toThrow('Wrong range')
      })
   })
   it('return valid number from range', () => {
      const generatedNumber = randomNumber(1, 10);
      expect(generatedNumber).toBeGreaterThanOrEqual(1);
      expect(generatedNumber).toBeLessThanOrEqual(10);
   })   
})


