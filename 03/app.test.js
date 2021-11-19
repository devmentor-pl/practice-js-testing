import randomNumber from './app';

it ('throw error, when prop min or prop max is NaN', () => {
    function numberValue() {
        const min = 2;
        const max = '2';
        randomNumber (min, max);
    }
    expect(numberValue).toThrow();
})