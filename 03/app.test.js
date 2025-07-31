import randomNumber from './app';

it('Num 1 is returned when draw number from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1)
})

it('If min arg number is not a number throw error', () => {
    expect( () => randomNumber('z', 5)).toThrow('Min arg is not a number')
})


it('If max arg number is not a number throw error', () => {
    expect( () => randomNumber(5, 'z')).toThrow('Max arg is not a number')
})

it('If min number is lower than max number', () => {
    expect( () => randomNumber(4, 3).toThrow('Min arg has to be lower than max arg'))
})