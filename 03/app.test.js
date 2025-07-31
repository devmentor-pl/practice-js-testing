import randomNumber from "./app";

it("return 1 when min and max are 1", () => {
  const result = randomNumber(1, 1);
  expect(result).toBe(1);
});

it("error if isNaN", () => {
  function randomNumberNaN() {
    randomNumber(NaN, 3);
  }
  expect(randomNumberNaN).toThrow();
});

it("min cannot be higher than max", () => {
  function minHigherThanMax() {
    randomNumber(5, 4);
  }
  expect(minHigherThanMax).toThrow();
});
