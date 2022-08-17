import randomNumber from './app';
it("return 1 when min is 1 and max is 1", () => {
	const number = randomNumber(1, 1);
	expect(number).toBe(1);
});
it("throw error when min limit is not a number", () => {
	function createNumber() {
		randomNumber("1", 1);
	}
	expect(createNumber).toThrow("Min limit is not a number");
});
it("throw error when max limit is not a number", () => {
	function createNumber() {
		randomNumber(1, "1");
	}
	expect(createNumber).toThrow("Max limit is not a number");
});

it("throw error if min is greater than max", () => {
	function createNumber() {
		randomNumber(10, 5);
	}
	expect(createNumber).toThrow();
});