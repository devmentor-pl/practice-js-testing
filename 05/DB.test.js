import DB from './DB';

describe(".insert()", () => {
	it("should add an item and increase the number of rows", () => {
		expect.assertions(1);
		const db = new DB();
		const data = { a: 1, b: 2 };
		const promise = db.insert(data);

		return promise
			.then(() => db.getRows())
			.then(dbRows => {
				expect(dbRows.length).toBe(2);
			});
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

describe(".remove()", () => {
	it("should remove item when it exists", () => {
		expect.assertions(1);
		const db = new DB();
		const promise = db.remove(1);

		return promise.then(result => {
			expect(result).toBe("Item was remove!");
		});
	});

	it("should not remove item when it does not exist", () => {
		const db = new DB();
		const promise = db.remove(5);

		return expect(promise).rejects.toMatch("Item does not exist!");
	});
});

describe(".update()", () => {
	it("should update item when its id matches new item's id", () => {
		expect.assertions(1);
		const db = new DB();
		const newData = { a: 6, b: 7, id: 1 };
		const promise = db.update(newData);

		return promise.then(result => {
			expect(result).toBe(newData);
		});
	});

	it("should not update item when new item does not have id", () => {
		const db = new DB();
		const newData = { a: 6, b: 7 };
		const promise = db.update(newData);

		return expect(promise).rejects.toMatch("ID have to be set!");
	});

	it("should not update item when id of new item does not match any id", () => {
		const db = new DB();
		const newData = { a: 6, b: 7, id: 7 };
		const promise = db.update(newData);

		return expect(promise).rejects.toMatch("ID not found!");
	});
});

describe(".getRows()", () => {
	it("should resolve with current rows", () => {
		expect.assertions(1);
		const db = new DB();
		const promise = db.getRows();

		return promise.then(result => {
			expect(result).toBe(db._rows);
		});
	});
});
// dodane zostały testy dla nowo dodanej metody .truncate().
describe(".truncate()", () => {
	it("should resolve and clear all rows", () => {
		expect.assertions(1);
		const db = new DB();
		const promise = db.truncate();

		return promise.then(result => {
			expect(result).toBe(true);
		});
	});
});


