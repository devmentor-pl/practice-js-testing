import randomNumber from './app';

describe("randomNumber()", () => {
	it("return value of argument if arguments are the same", () => {
		// const max = 1;
		// const min = 1;
		const result = randomNumber(1, 1);
		expect(result).toBe(1);
	});
})