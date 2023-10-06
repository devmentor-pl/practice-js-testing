import randomNumber from './app';

it('return 1 when min and max is equal 1', () => {
   expect(randomNumber(1, 1)).toBe(1)
})
it('throw exception when one of the arguments is not a number ', () => {
   expect(() => {
      randomNumber('2', 2).toThrow()
   })
})




