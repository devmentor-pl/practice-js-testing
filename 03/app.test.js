import randomNumber from "./app";

describe("randomNumber", () => {
  it("returns argument value when two args have same value", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });
});
