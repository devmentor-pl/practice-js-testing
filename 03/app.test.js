import randomNumber from './app';

describe('check range', () => {
    it('if value min & value max are equal to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });
})