import randomNumber from "./app";

describe("Random number generator", () => {
  it("should throw an error if no argument is provided", () => {
    function useGenerator() {
      randomNumber();
    }

    expect(useGenerator).toThrow();
  });

  it("should throw an error if max is greater than min", () => {
    function useGenerator() {
      randomNumber(2, 1);
    }

    expect(useGenerator).toThrow();
  });
});
