import randomNumber from './app';

it('return 1 when min, max is 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it('return 0 when min, max is not set', () => {
    expect(randomNumber()).toBe(0); 
});

it('throw exception when min > max or max < min', () => {
    function setNumber () {
        const min = 5;
        const max = 2;
        randomNumber(min, max);
    }
    
    expect(setNumber).toThrow();
})
