import randomNumber from "./app";

describe("Tests for min and max", () => {
  it("return 1 when draw numbers from 1 to 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });

  it("throw exception when max is smaller than min", () => {
    function useRandomNumber() {
      randomNumber(2, 1);
    }
    expect(useRandomNumber).toThrow("Property min is higher than propety max");
  });
});

describe("Tests for min", () => {
  it("throw exception when min is not a number", () => {
    function useRandomNumber() {
      randomNumber("string", 1);
    }
    expect(useRandomNumber).toThrow("Property min have to be a number");
  });

  it("check if drawn numer is equal or grater then min", () => {
    const drawnNumber = randomNumber(1, 6);
    expect(drawnNumber).toBeGreaterThanOrEqual(1);
  });
});

describe("Tests for max", () => {
  it("throw exception when max is not a number", () => {
    function useRandomNumber() {
      randomNumber(1, "string");
    }
    expect(useRandomNumber).toThrow("Property max have to be a number");
  });

  it("check if drawn numer is equal or less then max", () => {
    const drawnNumber = randomNumber(1, 6);
    expect(drawnNumber).toBeLessThanOrEqual(6);
  });
});
