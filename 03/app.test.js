import randomNumber from './app';

it('Should throw exception when min not a number', () => {
    function checkNumber() {
        randomNumber('1') 
    }
    expect(checkNumber).toThrow()
})

it('Should throw exception when max is not a number', () => {
    function checkNumber() {
        randomNumber(5, '1') 
    }
    expect(checkNumber).toThrow()
})