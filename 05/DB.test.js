import DB from "./DB";
describe("DB", () => {
	describe("Method insert()", () => {
		it("return error when is not a number", async () => {
			expect.assertions(1);
			const db = new DB();
			const data = { id: "A" };
			const result = db.insert(data);
			await result.catch((err) => expect(err).toBe("ID can be only number!"));
		});
		it("return error when ID's are duplicated", async () => {
			expect.assertions(1);
			const db = new DB();
			try {
				await db.insert({ id: 1 });
				await db.insert({ id: 1 });
			} catch (error) {
				expect(error).toBe("ID can't be duplicated!");
			}
		});
	});
	describe("Method select()", () => {
		it("return error when id not found", async () => {
			expect.assertions(1);
			const db = new DB();
			const id = 5;
			const result = db.select(id);
			await result.catch((err) => expect(err).toBe("ID not found"));
		});
	});
	describe("Method remove()", () => {
		it("return error when id not exist", async () => {
			expect.assertions(1);
			const db = new DB();
			const id = 5;
			const result = db.remove(id);
			await result.catch((err) => expect(err).toBe("Item not exist!"));
		});
		it("return info when id succesfully removed", async () => {
			const db = new DB();
			const data = { id: 5 };
			await db.insert(data);
			const result = db.remove(data.id);
			await result.catch((err) => expect(err).toBe("Item was remove!"));
		});
	});
	describe("Method update()", () => {
		it("return error when id is not set", async () => {
			expect.assertions(1);
			const db = new DB();
			const data = { a: "1" };
			const result = db.update(data);
			await result.catch((err) => expect(err).toBe("ID have to be set!"));
		});
		it("return error when id not found", async () => {
			const db = new DB();
			const data1 = { id: 5 };
			const data2 = { id: 10 };
			try {
				await db.insert(data1);
				await db.update(data2);
			} catch (error) {
				expect(error).toBe("ID not found!");
			}
		});
	});
	describe("Method truncate()", () => {
		it("clear db", async () => {
			const db = new DB();
			await db.insert({ id: 5 });
			await db.insert({ id: 10 });
			await db.truncate();
			const checkRows = await db.getRows();
			expect(checkRows.length).toBe(0);
		});
	});
});
