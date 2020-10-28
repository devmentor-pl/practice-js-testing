import randomNumber from "./app";

describe("Random Number", () => {
  it("should return random number between 1 and 10", () => {
    const number = randomNumber(1, 10);

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(10);
  });
});
