import randomNumber from "./app";

it("return 1 when min and max are 1", () => {
  const result = randomNumber(1, 1);
  expect(result).toBe(1);
});

it("error if isNaN", () => {
  function randomNumberNaN(min, max) {
    randomNumber(NaN, max);
  }
  expect(randomNumberNaN).toThrow();
});

it("min cannot be higher than max", () => {
  function minHigherThanMax(min, max) {
    randomNumber(max, min);
  }
  expect(minHigherThanMax).toThrow();
});
