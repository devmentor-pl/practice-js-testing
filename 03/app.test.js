import randomNumber from './app';

it('return 1 when both randmized numbers are 1' , () => {
    expect(randomNumber(1,1)).toBe(1);
});


it('throw error if parametr is not a number' , () => {

    function createNumber() {
        const min = 'abc'
        const max = 5;
        randomNumber(min , max);
    }

    expect(createNumber).toThrow();
});


it('throw error if max > min' , () => {

    function compareNumber() {
        const min = 4;
        const max = 3;
        randomNumber(min,max);
    }

    expect(compareNumber).toThrow();
})