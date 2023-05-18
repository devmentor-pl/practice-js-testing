import randomNumber from './app';

it('should return 1 when range is <1,1>', ()=>{
    const result = randomNumber(1,1)
    expect(result).toBe(1);
})

