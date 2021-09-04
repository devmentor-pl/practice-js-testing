import randomNumber from './app';

it('throws error if argument is not a number', () => {
    expect(() => randomNumber('0',0)).toThrow('Both arguments should be a number');
    expect(() => randomNumber(0,'0')).toThrow('Both arguments should be a number');
    expect(() => randomNumber('0','0')).toThrow('Both arguments should be a number');
})

it('returns x if both arguments are equal x', () => {
    expect(randomNumber(1,1)).toBe(1);
})

it('throws error if min is bigger than max', () => {
    expect(() => randomNumber(3,1)).toThrow('The first argument should be smaller than second one');
})

it('checks if random number id from interval', () => {
    const min = 1;
    const max = 3;
    expect(randomNumber(min,max)).toBeGreaterThan(min);
    expect(randomNumber(min,max)).toBeLessThan(max);
})