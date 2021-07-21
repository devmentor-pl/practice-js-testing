import randomNumber from './app';

it('return 1 when min, max is 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('throw exception when min, max, both is not a number', () => {
    function createNumber() {
        const min = 'number';
        const max = 4;
        randomNumber(min, max);
    }
    expect(createNumber).toThrow();
});

it('throw exception when max < min', () => {
    function setNumber () {
        const min = 5;
        const max = 2;
        randomNumber(min, max);
    }
    
    expect(setNumber).toThrow();
});
