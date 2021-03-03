import randomNumber from './app';

it('return 1 when random from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});


it('return 0 when prop min is not set', () => {
    const min = undefined;
    expect(randomNumber(min)).toBe(0);
});


it('return 0 when prop max is not set', () => {
    const min = undefined;
    const max = undefined;
    expect(randomNumber(min, max)).toBe(0);
});


it('throw exception when prop is not a number', () => {
    function createRandomNumber() {
        const min = 'b';
        const max = '1';
        randomNumber(min, max);
    }
    expect(createRandomNumber).toThrow();
});


it('throw exception when min > max or max < min', () => {
    function setValue() {
        const min = '5';
        const max = '3';
        randomNumber(min, max);
    }
    expect(setValue).toThrow();
});