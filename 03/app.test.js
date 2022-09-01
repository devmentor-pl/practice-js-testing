import randomNumber from './app';

it('should return 1 if min=1 & max=1', () => {
    expect(randomNumber(1, 1).toBe(1))
})