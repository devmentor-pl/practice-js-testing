import randomNumber from "./app";

describe("Random Number", () => {
  it("should return random number between 1 and 10", () => {
    const number = randomNumber(1, 10);

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(10);
  });

  it("should return random number between 1 and 10 when max < min", () => {
    const number = randomNumber(10, 1);

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(10);
  });

  it("should return 0 when min and max are both equal to 0", () => {
    const number = randomNumber(0, 0);

    expect(number).toBe(0);
  });

  it("should return random number between -5 and 1", () => {
    const number = randomNumber(-5, 1);

    expect(number).toBeGreaterThanOrEqual(-5);
    expect(number).toBeLessThanOrEqual(1);
  });

  it("should return 0 when min and max are both equal to 0", () => {
    const number = randomNumber(0, 0);

    expect(number).toBe(0);
  });

  it("should throw an error when min parameter was not provided", () => {
    expect(() => randomNumber()).toThrow("Min argument not provided.");
  });

  it("should throw an error when max parameter was not provided", () => {
    expect(() => randomNumber(0)).toThrow("Max argument not provided.");
  });

  it("should throw an error when min parameter is not a number", () => {
    expect(() => randomNumber("1", 10)).toThrow(
      "Min argument must be a number."
    );
  });

  it("should throw an error when max parameter is not a number", () => {
    expect(() => randomNumber(1, "10")).toThrow(
      "Max argument must be a number."
    );
  });
});
