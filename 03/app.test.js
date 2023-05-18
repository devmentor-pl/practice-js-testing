import randomNumber from './app';

it('should return 1 when range is <1,1>', ()=>{
    const result = randomNumber(1,1)
    expect(result).toBe(1);
})

it('should throw when either min or max is not a number', ()=>{
    const result = randomNumber('a','b');
    expect(result).toThrow();
})