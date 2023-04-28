import randomNumber from './app';

it('return 1 if min is set to 1 and max is set to 1', () => {

    expect(randomNumber(1,1)).toBe(1);

});