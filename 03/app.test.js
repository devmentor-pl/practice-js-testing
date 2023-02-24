import randomNumber from './app';

test('expect 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

test("not number", () => {
    expect(randomNumber(1, "text")).toBe(false);
});

test("min>max", () => {
    expect(randomNumber(3, 1)).toBe(false);
});

test("belong to range", () => {
    const result = randomNumber(1, 5);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(5);

})