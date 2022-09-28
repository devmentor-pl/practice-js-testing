import randomNumber from "./app";

it("return 1 when draw numbers from 1 to 1", () => {
  expect(randomNumber(1, 1)).toBe(1);
});
