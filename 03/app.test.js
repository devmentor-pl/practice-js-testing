import randomNumber from "./app";

test("when min and max are both 1, it should return 1", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

test("when non-number is passed should throw an error", () => {
  expect(() => randomNumber("x", 1)).toThrow();
});

test("when non-number is passed should throw an error", () => {
  expect(() => randomNumber(1, "x")).toThrow();
});

test("should throw an error if min is greater than max", () => {
  expect(() => randomNumber(5, 3)).toThrow();
});
