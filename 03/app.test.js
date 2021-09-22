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

test('expect checkproperty to throw an error', () => {

    expect( () => {const ranNum = new RanNum("a", "b")}
     ).toThrow('Property a have to be a number');
})

test('expect valueInequality to throw an error', () => {
    const ranNum = new RanNum(2, 1)

    expect( () => ranNum.randomNumber() ).toThrow('max have to be greater than min')
}) 

test('expect that the random number will fit in the range', () => {
    const ranNum = new RanNum(1, 2)

    expect( () => ranNum.randomNumber() ).toEqual(1)
})