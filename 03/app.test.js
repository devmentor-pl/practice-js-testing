import randomNumber from "./app";

describe("randomNumber", () => {
  it("returns argument value when two args have same value", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });

  it("throws expection when one of props is not of type number", () => {
    const arg1 = "X";
    const arg2 = 3;
    expect(() => randomNumber(arg1, arg2)).toThrow();
  });

  it("throws expection when [max] arg is small than [min] arg", () => {
    const arg1 = 5;
    const arg2 = 3;
    expect(() => randomNumber(arg1, arg2)).toThrow();
  });
});
