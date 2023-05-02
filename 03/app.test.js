import randomNumber from "./app";

describe("randomNumber function", () => {
  it("return 1 if min is set to 1 and max is set to 1", () => {
    expect(randomNumber(1, 1)).toBe(1);
  });

  it("throw error when property min and max is not a number", () => {
    function createRandomNumber() {
      randomNumber("4", "5");
    }
    expect(createRandomNumber).toThrow(`Property have to be a number`);
  });

  it("throw error if number range is incorrect", () => {
    function createRandomNumber() {
      randomNumber(4, 3);
    }
    expect(createRandomNumber).toThrow(`min cant be greater than max`);
  });
});
