import randomNumber from './app';

it('should return 0 if min = 0 and max = 0', () => {
    const min, max = 0;
    expect(randomNumber(min, max)).toBe(0);

})