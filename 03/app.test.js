import randomNumber from './app';

it('should return 1 when range is from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('should throw error when arguments are not a numbers', () => {
    expect(() => randomNumber('arbuz', 1)).toThrow();
});

it('should throw error when min is greater than max', () => {
    expect(() => randomNumber(4, 3)).toThrow();
});