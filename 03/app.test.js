import randomNumber from './app';

it('throw exception when first arg is not a number', () => {
    function drawNumber() {
        const min = 'x';
        const max = 6;
        randomNumber(min, max);
    }
    expect(drawNumber).toThrow();
});