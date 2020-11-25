import randomNumber from './app';

it('should return 0 if min = 0 and max = 0', () => {
    const min = 0;
    const max = 0;
    expect(randomNumber(min, max)).toBe(0);
})

it('should throw an error if parameter min is not a number', () => {
    const min = 'X';
    expect(randomNumber(min, undefined)).toThrow();
})