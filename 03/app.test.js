import randomNumber from './app'

test('test start', () => {
    expect(true).toBe(true)
})

test('test fn', () => {
    expect(randomNumber(1,1)).toBe(1)
})

test('test check if there are no args', () => {
    function createRandomFn() {
        randomNumber()
    }
    expect( createRandomFn ).toThrow()
    // expect( () => createRandomFn() ).toThrow()
    // expect( () => randomNumber() ).toThrow()
})


test('test check if min > max', () => {
    expect( () => randomNumber(3, 1) ).toThrow()
})





