import randomNumber from './app';

it('return 1 when min is 1 and max is 1', () => {
    const drawnNumber = randomNumber(1, 1);
    expect(drawnNumber).toBe(1);
});

it('should throw exception when insert not a number', () => {
    function drawNumber() {
        randomNumber('1', '2');
    }
    expect(drawNumber).toThrow();
});