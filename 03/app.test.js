import randomNumber from "./app";

describe("randomNumber()", () => {
	it("return value of argument if arguments are the same", () => {
		// const max = 1;
		// const min = 1;
		const result = randomNumber(1, 1);
		expect(result).toBe(1);
	});

	it("throw exception when prop min is not a number", () => {
		function checkNumber() {
			randomNumber("string", 1);
		}
		expect(checkNumber).toThrow("Min has to be a number");
	});

	it("throw exception when prop max is not a number", () => {
		function checkNumber() {
			randomNumber(1, "string");
		}
		expect(checkNumber).toThrow("Max has to be a number");
	});

	it("throw exception if max = 3 and min = 4", () => {
		function checkRange() {
			randomNumber(4, 3);
		}
		expect(checkRange).toThrow();
	});

	it("if min = 2 and max = 5 result should be between min and max", () => {
		const result = randomNumber(2, 5);

		expect(result).toBeGreaterThanOrEqual(2);
		expect(result).toBeLessThanOrEqual(5);
	});
});
