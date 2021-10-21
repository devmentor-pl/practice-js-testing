import randomNumber from './app';

it('throw exception when first arg is not a number', () => {
    function drawNumber() {
        const min = 'x';
        const max = 6;
        randomNumber(min, max);
    }
    expect(drawNumber).toThrow();
});

it('throw exception when second arg is not a number', () => {
    function drawNumber() {
        const min = 2;
        const max = undefined;
        randomNumber(min, max);
    }
    expect(drawNumber).toThrow();
});

it('throw exception when one of arg is NaN', () => {
    function drawNumber() {
        const min = NaN;
        const max = 1;
        randomNumber(min, max);
    }
    expect(drawNumber).toThrow();
})