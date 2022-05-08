import randomNumber from '../app';

it('if you draw a number between 1 and 1, the function returns 1', () => {
    expect(randomNumber(1,1)).toBe(1)
    
})