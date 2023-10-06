//Test 1

import randomNumber from './app';

it ('return 1 if min=1 and max=1', () =>{
    expect( randomNumber(1, 1)).toBe(1);
});




//Test 2

it ('show error if not a number', () => {
    expect ( () => randomNumber('1', 10)).toThrow('min is not a number');
});