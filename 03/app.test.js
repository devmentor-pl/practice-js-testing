import randomNumber from "./app";
it("return 1 if min=1 and max=1", () => {
	expect(randomNumber(1, 1)).toBe(1);
});

it("throw erorr if min is not a number", () => {
	expect(() => randomNumber("1", 2)).toThrow('"min" is not a number');
});

it("throw erorr if max is not a number", () => {
	expect(() => randomNumber(1, "2")).toThrow('"max" is not a number');
});
