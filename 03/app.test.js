import randomNumber from "./app";

describe("Tests for min and max", () => {
  it("return 1 when draw numbers from 1 to 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });

  it("throw exception when max is smaller than min", () => {
    function useRandomNumber() {
      randomNumber(2, 1);
    }
    expect(useRandomNumber).toThrow();
  });
});

describe("Test for min", () => {
  it("throw exception when min is not a number", () => {
    function useRandomNumber() {
      randomNumber("string", 1);
    }
    expect(useRandomNumber).toThrow();
  });
});

describe("Test for max", () => {
  it("throw exception when max is not a number", () => {
    function useRandomNumber() {
      randomNumber(1, "string");
    }
    expect(useRandomNumber).toThrow();
  });
});
