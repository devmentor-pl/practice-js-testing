import randomNumber from './app';

it ('throw error, when prop min or prop max is NaN', () => {
    function checkingValues() {
        const min = 2;
        const max = '2';
        randomNumber(min, max);
    }
    expect(checkingValues).toThrow();
});

it ('throw error, when prop min is bigger than prop max', () => {
    function checkingValues() {
        const min = 5;
        const max = 3;
        randomNumber(min, max);
    }
    expect(checkingValues).toThrow();
});

it ('return 1, when min and max is the same', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it ('return number from the given range', () => {

    const min = 3;
    const max = 10;
    const number = randomNumber(min,max);

    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThanOrEqual(max);
});