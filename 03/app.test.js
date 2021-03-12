import randomNumber from './app';

it('return 0 when min is not set', () => {
    expect(randomNumber()).toBe(0);
});

it('return 0 when max is not set', () => {
    expect(randomNumber()).toBe(0);
})

it('throw exception when min, max, both is not a number', () => {
    const notNumber = 'a';
    expect(() => randomNumber(notNumber, undefined)).toThrow();
    expect(() => randomNumber(undefined, notNumber)).toThrow();
    expect(() => randomNumber(notNumber, notNumber)).toThrow();
});

it('return 1 when min and max has value 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('throw exception when min is bigger than max', () => {
    expect(() => randomNumber(10, 20)).toThrow;
});