import randomNumber from './app';

it('throw error if any of parameters in not a number', ()=>{
    function searchForRanomNumber() {
        new randomNumber(undefined, 10)
    }

    expect(searchForRanomNumber).toThrow();
});

it('throw error if min is bigger than max', () => {
    function checkMinMax() {
        new randomNumber(5, 2)
    }

    expect(checkMinMax).toThrow();
});