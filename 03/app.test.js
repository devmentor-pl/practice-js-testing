import randomNumber from './app';

it('return 1 when random from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});


it('return 0 when prop min is not set', () => {
    expect(randomNumber()).toBe(0);
});


it('return 0 when prop max is not set', () => {
    expect(randomNumber()).toBe(0);
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


it('return a number between min and max', () => {
    const min = 3;
    const max = 20;

    expect(min < randomNumber(min, max) < max).toBe(true);
});