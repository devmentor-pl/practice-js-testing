import randomNumber from './app';

it('throw error if "min" is not a number', () => {
    expect( () => randomNumber('1', 2) ).toThrow();
});

it('throw error if "max" is not a number', () => {
    expect( () => randomNumber(2, '1') ).toThrow();
});

it('return 1 if both arguments = 1', () => {
    expect( () => randomNumber(1,1) ).toBe(1);
});