import randomNumber from './app';

it('if value min = 1 and value max = 1', () => {
    expect(randomNumber(1,1)).toBe(1);
});

it('if value is not a number', () => {
    expect(randomNumber).toThrow(Error);
});

it('if value min is greater than value max', () => {
    expect(randomNumber(10,5)).toThrow(Error)
});