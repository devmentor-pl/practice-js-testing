import RanNum from './app';

test('is randomNumber a function', () => {
    const ranNum = new RanNum(1, 2);
    expect(typeof ranNum.randomNumber).toBe('function')

})  
// tu po przebudowaniu funckji w app.js i dodaniu return pojawil sie problem (Expected: "function"
//    Received: [Function randomNumber])
//



test('randomNumber numbers', () => {

    const ranNum = new RanNum(1, 2);

    expect(typeof ranNum.min).toBe('number')
}) 




test('randomNumber parameters', () => {
    const ranNum = new RanNum(1, 2);

    expect(ranNum.max > ranNum.min).toBe(true)
}) 