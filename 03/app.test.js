import randomNumber from './app';

it ('throw error, when prop min or prop max is NaN', () => {
    function checkingValues() {
        const min = 2;
        const max = '2';
        randomNumber(min, max);
    }
    expect(checkingValues).toThrow();
})

it ('throw error, when prop min is bigger than prop max', () => {
    function checkingValues() {
        const min = 5;
        const max = 3;
        randomNumber(min, max);
    }
    expect(checkingValues).toThrow();
})

it ('return 1, when min and max is the same', () => {
    function checkingValues() {
        const min = 1;
        const max = 1;
        randomNumber(min, max);
    }
    expect(checkingValues).toBe(1);
})