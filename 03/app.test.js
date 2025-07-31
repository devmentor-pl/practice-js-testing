import randomNumber from "./app";

it("return 1 if min = 1 and max = 1", () => {
  expect(randomNumber(1, 1)).toBe(1);
});

it("throw error if min is not a number", () => {
  expect(() => randomNumber("1", 1)).toThrow("The min is not a number");
});

it("throw error if max is not a number", () => {
  expect(() => randomNumber(1, "1")).toThrow("The max is not a number");
});

it("throw error if min > max", () => {
  expect(() => randomNumber(4, 3)).toThrow("The min sie bigger than max");
});

it("throw error if random number is out of range", () => {
  expect(() => randomNumber(1, 2).toThrow("The random number is out of range"));
});
