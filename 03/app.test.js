import randomNumber from "./app";

it("return error if min is not a number", () => {
    expect(randomNumber("string", 1)).toThrow();
});

it("return 1 if min is 1 and max is 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
});

it("return error if max is larger than min", () => {
    expect(randomNumber(8, 2)).toThrow();
});
