import RanNum from './app';

test('is randomNumber a function', () => {
    const ranNum = new RanNum;
    expect(typeof ranNum.randomNumber).toBe('function')
})


/*test('randomNumber numbers', () => {

    const ranNum = new RanNum;

    expect(typeof ranNum.randomNumber('1', '2')).toBe('number')
}) 




test('randomNumber parameters', () => {
    

    expect(ranNum.max > ranNum.min).toBe(true)
}) */