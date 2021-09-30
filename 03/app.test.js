import randomNumber from "./app";

describe("Random number generator", () => {
  it("should throw an error if no argument is provided", () => {
    function useGenerator() {
      randomNumber();
    }

    expect(useGenerator).toThrow();
  });
});
