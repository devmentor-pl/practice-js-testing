import randomNumber from './app';

it('if you draw a number between 1 and 1, the function returns 1', () => {
    expect(randomNumber(1,1)).toBe(1)
    
})

it('if you provide NaN as an argument, an error will be returned', () => {
    function drawNumber() {
        const min = NaN
        const max = NaN
        randomNumber(min,max)
    }
    expect(drawNumber).toThrow('The arguments cannot be NaN')  
})

it('if you provide NaN as a first argument, an error will be returned', () => {
    function drawNumber() {
        const min = NaN
        const max = 5
        randomNumber(min,max)
    }
    expect(drawNumber).toThrow()  
})

it('if you provide NaN as a second argument, an error will be returned', () => {
    function drawNumber() {
        const min = 5
        const max = NaN
        randomNumber(min,max)
    }
    expect(drawNumber).toThrow()  
})

it('if the first argument is greater than the second argument, an error will be returned', () => {
    function drawNumber() {
        const min = 10
        const max = 2
        randomNumber(min,max)
    }
    expect(drawNumber).toThrow('The first argument cannot be greater than the second argument')
    
})