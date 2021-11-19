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