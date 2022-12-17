
import randomNumber from './app';

it('should print 1 when number are in range from 1 to 1', () => {

    expect(randomNumber(1, 1)).toBe(1)

})

it('should "min" shoud be a number otherwise will throw error', ()=>{

    expect(()=> randomNumber('a', 2)).toThrow('"min " is not a number')

})

it('should "max" shoud be a number otherwise will throw error', ()=>{

    expect(()=> randomNumber(2, 'a')).toThrow('"max " is not a number')


})