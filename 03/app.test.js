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
			randomNumber("string");
		}
		expect(checkNumber).toThrow();
	});
});

// jeśli podasz jako argument "nie liczbę", to zostanie rzucony błąd,
