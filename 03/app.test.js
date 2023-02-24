import randomNumber from './app';

test('expect 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
});

test("not number", () => {
    expect(randomNumber(1, "text")).toBe(NaN);
})

test("min>max", () => {
    expect(randomNumber(3, 1)).toBe(false);
})