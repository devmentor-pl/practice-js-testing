import randomNumber from './app';

it('return 1 when both randmized numbers are 1' , () => {
    expect(randomNumber(1,1)).toBe(1);
})