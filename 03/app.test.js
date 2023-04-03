import randomNumber from "./app";

describe("randomNumber()", () => {
	it("return 1 if range is from 1 to 1", () => {
		const max = 1;
		const min = 1;

		const result = randomNumber(1, 1);

		expect(result).toBe(1);
	});
});
