import randomNumber from "./app";

describe("randomNumber(min, max)", () => {
  it("returns 1 if min >= 1 and max <= 1", () => {
    const min = 1;
    const max = 1;
    expect(randomNumber(min, max)).toBe(1);
  });

  describe("if arguments are not numbers throw an error", () => {
    it("both arguments are not numbers", () => {
      const min = "not a number";
      const max = "not a number";
      expect(() => randomNumber(min, max)).toThrow(
        new TypeError("Arguments has to be numbers.")
      );
    });

    it("min is not a number", () => {
      const min = "not a number";
      const max = 1;
      expect(() => randomNumber(min, max)).toThrow(
        new TypeError("min has to be a number.")
      );
    });

    it("max is not a number", () => {
      const min = 1;
      const max = "not a number";
      expect(() => randomNumber(min, max)).toThrow(
        new TypeError("max has to be a number.")
      );
    });
  });

  it("if min > max throw an error", () => {
    const min = 10;
    const max = 9;

    expect(() => randomNumber(min, max)).toThrow(
      new RangeError("min can't be larger than max.")
    );
  });

  it("if min & max are valid, check if drawn number are in the range of min-max", () => {
    const min = 80;
    const max = 100;

    const isDawnNumberInTheRange = (min, max) => {
      const drawnNumber = randomNumber(min, max);
      if (drawnNumber >= min || drawnNumber <= max) {
        return true;
      }

      return false;
    };

    expect(isDawnNumberInTheRange(min, max)).toBe(true);
  });
});
