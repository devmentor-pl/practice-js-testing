import randomNumber from './app';

it('throw error if "min" is not a number', () => {
    expect( () => randomNumber('1', 2)).toThrow();
});