import randomNumber from './app';

it('should return 1 when range is <1,1>', ()=>{
    const result = randomNumber(1,1)
    expect(result).toBe(1);
})

it('should throw when either min or max is not a number', ()=>{
    expect(()=> {
        randomNumber('a','b');
    }).toThrow();
        
})

it('should throw when either min > max', ()=>{
    expect(()=> {
        randomNumber(4,2);
    }).toThrow();
})

it('should return number within range <min,max>', ()=>{
    const result = randomNumber(2,5)
    expect(2<=result<=5).toBeTruthy();
})
