import DB from './DB';

describe('DB', () => {
	describe('insert', () => {
		it('should return 1 when add 1 item', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ a: 1, b: 2 })
				.then(() => db.getRows())
				.then((rows) => expect(rows.length).toBe(1));
		});

		it('should reject when ID is not a number', () => {
			expect.assertions(1);
			const db = new DB();

			return db.insert({ id: 'x', a: 1, b: 2 }).catch((err) => {
				expect(err).toBe('ID can be only number!');
			});
		});

		it('should reject when ID is duplicated', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ id: 1, a: 1, b: 2 })
				.then(() => db.insert({ id: 1, a: 3, b: 4 }))
				.catch((err) => {
					expect(err).toBe("ID can't be duplicated!");
				});
		});
	});

	describe('select', () => {
		it('should reject when ID not found', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ id: 1, a: 1, b: 2 })
				.then(() => db.select(2))
				.catch((err) => {
					expect(err).toBe('ID not found');
				});
		});

		it('should resolve when item exists', () => {
			expect.assertions(1);
			const db = new DB();
			const data = { id: 1, a: 1, b: 2 };

			return db
				.insert(data)
				.then(() => db.select(1))
				.then((resp) => {
					expect(resp).toBe(data);
				});
		});
	});

	describe('remove', () => {
		it('should reject when item not exist', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ id: 1, a: 1, b: 2 })
				.then(() => db.remove(2))
				.catch((err) => {
					expect(err).toBe('Item not exist!');
				});
		});

		it('should resolve when item was remove', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ id: 1, a: 1, b: 2 })
				.then(() => db.remove(1))
				.then((resp) => {
					expect(resp).toBe('Item was remove!');
				});
		});
	});

	describe('update', () => {
		it('should reject when ID is not set', () => {
			expect.assertions(1);
			const db = new DB();

			return db.update({ a: 1, b: 2 }).catch((err) => {
				expect(err).toBe('ID have to be set!');
			});
		});

		it('should reject when ID not found', () => {
			expect.assertions(1);
			const db = new DB();

			return db.update({ id: 5, a: 1, b: 2 }).catch((err) => {
				expect(err).toBe('ID not found!');
			});
		});

		it('should resolve when item was update', () => {
			expect.assertions(1);
			const db = new DB();
			const data = { id: 1, a: 1, b: 2 };
			const updateData = { id: 1, a: 10, b: 20 };

			return db
				.insert(data)
				.then(() => db.update(updateData))
				.then((resp) => {
					expect(resp).toBe(updateData);
				});
		});
	});

	describe('truncate', () => {
		it('return 0 when database was cleared', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ a: 1, b: 2 })
				.then(() => db.truncate())
				.then(() => db.getRows())
				.then((rows) => expect(rows.length).toBe(0));
		});
	});

	describe('getRows', () => {
		it('should return 2 rows that are in database', () => {
			expect.assertions(1);
			const db = new DB();

			return db
				.insert({ a: 1, b: 2 })
				.then(() => db.insert({ a: 10, b: 20 }))
				.then(() => db.getRows())
				.then((rows) => expect(rows.length).toBe(2));
		});
	});
});
