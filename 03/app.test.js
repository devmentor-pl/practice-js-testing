import randomNumber from './app';

it('return 1 if min is set to 1 and max is set to 1', () => {

    expect(randomNumber(1,1)).toBe(1);

});

it("throw error when property min is not a number", () => {

    function createRandomNumber(){
        randomNumber('4', 1)
    }

    expect(createRandomNumber).toThrow()

})