import randomNumber from './app';

it('returns 1 from the range 1 - 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
})

it('throws error if arg1 is NaN', () => {
    function testNumber(){
        randomNumber('1', 1);
    }
    expect(testNumber).toThrow();
})