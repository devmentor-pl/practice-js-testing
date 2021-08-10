import randomNumber from "./app";

it("return error if min is not a number", () => {
    expect(() => {
        randomNumber("string", 1);
    }).toThrow("Min is not a number");
});

it("return error if max is not a number", () => {
    expect(() => {
        randomNumber(1, "string");
    }).toThrow("Max is not a number");
});

it("return 1 if min is 1 and max is 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it("return error if max is larger than min", () => {
    expect(() => {
        randomNumber(8, 2);
    }).toThrow("Max cannot be smaller than min");
});

it("get random number in range [1, 10]", () => {
    const result = randomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
});
