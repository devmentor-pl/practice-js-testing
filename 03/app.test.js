import RanNum from './app';

test('does randomNumber exists', () => {
    const ranNum = new RanNum;
    expect(ranNum.randomNumber).toBe(true)
})


/*test('randomNumber numbers', () => {

    const ranNum = new RanNum;

    expect(typeof ranNum.randomNumber('1', '2')).toBe('number')
}) 




test('randomNumber parameters', () => {
    

    expect(ranNum.max > ranNum.min).toBe(true)
}) */