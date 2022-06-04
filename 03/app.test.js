import randomNumber from './app';

it('return 1 if min=1 and max=1', () => {
    expect( randomNumber(1, 1) ).toBe(1);
})