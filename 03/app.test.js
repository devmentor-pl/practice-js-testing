import randomNumber from './app';

it ('when min = 1 and  max = 1 return 1', () => {
    expect(randomNumber(1,1)).toBe(1);
});

it ('throw exception when min is not number' , () => {    
    function drawNumber(min, max) {
        randomNumber(min, max);
    }

    expect(drawNumber('1', 2)).toThrow();
});