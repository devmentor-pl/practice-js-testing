import randomNumber from './app';

describe('randomNumber', () => {
    test('returns 1 when the range is from 1 to 1', () => {
        expect(randomNumber(1, 1)).toBe(1);
    });
})