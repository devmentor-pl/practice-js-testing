import randomNumber from "./app";

test("when min and max are both 1, it should return 1", () => {
  expect(randomNumber(1, 1).toBe(1));
});
