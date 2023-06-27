import randomNumber from './app';

it('min=1 and max=1 returns 1', () => {
    expect( randomNumber(1,1) ).toBe(1)
})

it('if min is NaN throw error', () => {
    expect( () => randomNumber('a', 4)).toThrow('min is not a number')
})
 
it('if max is NaN throw error', () => {
    expect( () => randomNumber(2, '9')).toThrow('max is not a number')
}) 

it('if min > max throw error', () => {
    expect( () => randomNumber(5, 2)).toThrow('min is higher than max')
})