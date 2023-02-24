import randomNumber from './app';

test('expect 1', () => {
    expect(randomNumber(1, 1)).toBe(2);
});