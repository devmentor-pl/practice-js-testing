import randomNumber from './app';

it('when min = 1 and  max = 1 return 1', () => {
    expect(randomNumber(1,1)).toBe(1);
});
