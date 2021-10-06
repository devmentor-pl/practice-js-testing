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

  it("should return 1 when min and max are 1", () => {
    const result = randomNumber(1, 1);

    expect(result).toBe(1);
  });

  it("should throw an error if arguments are not numbers", () => {
    function useGenerator() {
      randomNumber("a", "b");
    }

    expect(useGenerator).toThrow();
  });
});
