import DB from "./DB";
describe("DB", () => {
	describe("Method insert()", () => {
		it("return error when is not a number", async () => {
			const db = new DB();
			const data = { id: "A" };
			const result = db.insert(data);
			await result.catch((err) =>
				expect(err).toBe("ID can be only number!")
			);
		});
		it("return error when ID's are duplicated", async () => {
			const db = new DB();
			const data = { id: 1, id: 1 };
			const result = db.insert(data);
			await result.catch((err) => {
				expect(err).toBe("ID can't be duplicated!");
			});
		});
	});
});
