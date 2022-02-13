import randomNumber from './app';

it('if value min = 1 and value max = 1', () => {
    expect(randomNumber(1,1)).toBe(1);
});

it('if value is not a number', () => {
    function checkingValues(){
        const min ="oko";
        const max ="dom";
        randomNumber(min,max)
    }
    expect(checkingValues).toThrow('value: min AND max have to be a number');
});

it('if value min is greater than value max', () => {
    function checkingValues(){
        randomNumber(5,2)
    }
    expect(checkingValues).toThrow('value min can not be greater than value max');
});

it('if random number is from given range', () => {
    const min = 3;
    const max = 14;
    const randomValue = randomNumber(min,max);
    expect(randomValue).toBeGreaterThanOrEqual(min);
    expect(randomValue).toBeLessThanOrEqual(max);
});