import DB from './DB';

describe('DB', () => {
	describe('insert', () => {
		it('should reject when id is not a number', async () => {
			expect.assertions(1);
			const db = new DB();

			try {
				await db.insert({ id: 'a' });
			} catch (err) {
				expect(err).toBe('ID can be only number!');
			}
		});

		it('should reject when given id exist in DB', async () => {
			expect.assertions(1);
			const db = new DB();
			await db.insert({ id: 1 });

			try {
				await db.insert({ id: 1 });
			} catch (err) {
				expect(err).toBe("ID can't be duplicated!");
			}
		});

		it('should resolve to data when insert data to empty array', async () => {
			const db = new DB();
			const data = { a: 1, b: 2 };
			await db.insert(data);
			const row = await db.getRows();

			expect(row).toStrictEqual([{ a: 1, b: 2, id: 1 }]);
		});
	});

	describe('select', () => {
		it('should reject when id cannot find', async () => {
			expect.assertions(1);
			const db = new DB();
			try {
				await db.select(2);
			} catch (err) {
				expect(err).toBe('ID not found');
			}
		});

		it('should return content with given id', async () => {
			const db = new DB();
			await db.insert({});
			const selectedDataById = await db.select(1);

			expect(selectedDataById).toStrictEqual({ id: 1 });
		});
	});

	describe('remove', () => {
		it('should reject when removing item not exist', async () => {
			expect.assertions(1);
			const db = new DB();
			try {
				await db.remove(1);
			} catch (err) {
				expect(err).toBe('Item not exist!');
			}
		});

		it('should return empty array when the only element of array is removed', async () => {
			const db = new DB();
			await db.insert({ a: 1, b: 2 });
			await db.remove(1);
			const row = await db.getRows();

			expect(row).toEqual([]);
		});
	});

	describe('update', () => {
		it('should reject when id is not given', async () => {
			expect.assertions(1);
			const db = new DB();
			try {
				await db.update({});
			} catch (err) {
				expect(err).toBe('ID have to be set!');
			}
		});

		it('should reject when id is not found', async () => {
			expect.assertions(1);
			const db = new DB();
			try {
				await db.update({ id: 1 });
			} catch (err) {
				expect(err).toBe('ID not found!');
			}
		});

		it('should return true and an array with newData when update DB with correct id', async () => {
			expect.assertions(2);
			const db = new DB();
			const data = { a: 1, b: 2, id: 1 };
			const newData = { ...data, b: 4 };
			await db.insert(data);
			const updatedDB = await db.update(newData);
			const row = await db.getRows();

			expect(updatedDB).toBeTruthy();
			expect(row).toStrictEqual([{ a: 1, b: 4, id: 1 }]);
		});
	});

	describe('getRows', () => {
		it('should return one item from array when insert one item to array', async () => {
			const db = new DB();
			await db.insert({});
			const row = await db.getRows();

			expect(row).toStrictEqual([{ id: 1 }]);
		});
	});

	describe('truncate', () => {
		it('should return empty array when truncate an array', async () => {
			const db = new DB();
			await db.insert({ a: 1 });
			await db.insert({ a: 2 });
			await db.insert({ a: 3 });
			await db.truncate();
			const row = await db.getRows();

			expect(row).toEqual([]);
		});
	});
});
