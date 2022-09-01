import randomNumber from './app';

it('should return 1 if min=1 & max=1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('should throw error if min is not a number', () => {
    expect(() => randomNumber('1', 2)).toThrow('first argument is not a number');
});

it('should throw error if max is not a number', () => {
    expect(() => randomNumber(1, '2')).toThrow('second argument is not a number');
});

it('should throw error if first argument is grater than second argument', () => {
    expect(() => randomNumber(4, 3)).toThrow('first argument cannot be grater than second argument');
});