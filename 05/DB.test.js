import DB from './DB';

describe(".insert()", () => {
	it("should return 2 when one item is inserted", () => {
		expect.assertions(1);
		const db = new DB();
		const promise = db.insert({ a: 1, b: 2 });

		return promise
			.then(() => db.getRows())
			.then(dbRows => expect(dbRows.length).toBe(2));
	});

	it("should not add data when id is not a number", () => {
		const db = new DB();
		const promise = db.insert({ a: 3, b: 4, id: "string" });

		return expect(promise).rejects.toMatch("ID can be only number!");
	});

	it("should not add data when id is duplicated", () => {
		const db = new DB();
		const promise = db.insert({ a: 5, b: 6, id: 1 });

		return expect(promise).rejects.toMatch("ID can't be duplicated!");
	});
});

