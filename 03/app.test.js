import randomNumber from "./app";

describe("randomNumber()", () => {
	it("return 1 if range is from 1 to 1", () => {
		const max = 1;
		const min = 1;
		const result = randomNumber(1, 1);
		expect(result).toBe(1);
	});

	it("throw exception when prop min is not a number", () => {
		function checkNumber() {
			randomNumber("string", 1);
		}
		expect(checkNumber).toThrow();
	});

	it("throw exception when prop max is not a number", () => {
		function checkNumber() {
			randomNumber(1, "string");
		}
		expect(checkNumber).toThrow();
	});

	it("throw exception if max = 3 and in = 4", () => {
		function checkRange() {
			randomNumber(4, 3);
		}
		expect(checkRange).toThrow();
	});

	it("if min = 2 and max = 5 check if range is between 2 to 5", () => {
		const result = randomNumber(2, 5);

		expect(result).toBeGreaterThanOrEqual(2);
		expect(result).toBeLessThanOrEqual(5);
	});
});
