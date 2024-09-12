import randomNumber from './app';

it('return 0 when min is not set', () => {
    expect(randomNumber(-1)).toBe(0);
    expect(randomNumber(undefined)).toBe(0);
});

it('return 0 when max is not set', () => {
    expect(randomNumber(undefined, -3)).toBe(0);
    expect(randomNumber(undefined, undefined)).toBe(0);
})

it('throw exception when min, max, both is not a number', () => {
    function createNumber() {
        const min = 'number';
        const max = 20;
        randomNumber(min, max);
    }
    expect(createNumber).toThrow();
});

it('return 1 when min and max has value 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('throw exception when min is bigger than max', () => {
    expect(() => randomNumber(20, 10)).toThrow();
});