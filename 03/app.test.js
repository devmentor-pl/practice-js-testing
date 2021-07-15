import randomNumber from './app';

it('randomNumber is a number', () => {

    const min = 1;
    const max = 10;

    expect(typeof randomNumber(min, max)).toBe('number');

})

it('if min = 1 and max = 1 than result = 1', () => {

    const min = 1;
    const max = 1;
    const result = randomNumber(min, max);
    
    expect(result).toBe(1);

})

it('result must be greater or equal than parameter min', () => {
    
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    
    expect(result).toBeGreaterThanOrEqual(min);

})

it('result must be less or equal than parameter max', () => {
    
    const min = 1;
    const max = 10;
    const result = randomNumber(min, max);
    
    expect(result).toBeLessThanOrEqual(max);

})
