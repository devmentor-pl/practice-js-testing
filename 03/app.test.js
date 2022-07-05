import randomNumber from './app';

it ('when min = 1 and  max = 1 return 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it ('throw exception when min is not number' , () => {    
    function drawNumber() {
        randomNumber('1', 2);
    }    
    
    expect(drawNumber).toThrow();
});

it ('throw exception when max is not number' , () => {    
    function drawNumber() {
        randomNumber(1, '2');
    }    
    
    expect(drawNumber).toThrow();
});

it ('throw exception when max < min ', () => {
    function drawNumber() {
        randomNumber(10, 5);
    }

    expect(drawNumber).toThrow();
});

it ('when min and max is correct return number in range (min, max)', () => {    
    const num = randomNumber(5, 10);
    
    expect(num).toBeGreaterThanOrEqual(5);
    expect(num).toBeLessThanOrEqual(10);
})
