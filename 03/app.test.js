import randomNumber from './app';

describe('RandomNumber', () => {
    it('return 1 if min and max = 1', () => {
        expect(randomNumber(1, 1)).toBe(1)
    });
});