import DB from './DB';

describe('DB', () => {
	describe('insert()', () => {
		it('stop function when ID is not a number', async () => {
			expect.assertions(1);
			const db = new DB();
			const data = { id: '1' };
			await db.insert(data).catch(err => expect(err).toBe('ID can be only number!'));
		});

		it('stop function when ID is duplicated', async () => {
			expect.assertions(1);
			const db = new DB();
			const data = { id: 1 };
			await db.insert(data);
			const newData = { id: 1 };
			await db.insert(newData).catch(err => expect(err).toBe("ID can't be duplicated!"));
		});
	});

	describe('select()', () => {
		it('should return into when ID not found', async () => {
			expect.assertions(1);
			const db = new DB();
			const id = 1;
			await db.select(id).catch(err => expect(err).toBe('ID not found'));
		});
	});

	describe('remove()', () => {
		it('should return info when item not exist', async () => {
			expect.assertions(1);
			const db = new DB();
			const id = 1;
			await db.remove(id).catch(err => expect(err).toBe('Item not exist!'));
		});

		it('remove when item exist', async () => {
			const db = new DB();
			const data = { id: 1 };
			await db.insert(data);
			await expect(db.remove(data.id)).resolves.toBe('Item was remove!');
		});
	});

	describe('update()', () => {
		it('reject when ID is not set', async () => {
			expect.assertions(1);
			const db = new DB();
			const data = { name: 'Michael' };
			await db.update(data).catch(err => expect(err).toBe('ID have to be set!'));
		});

		it('reject when ID is not found', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const data1 = {id: 1};
            await dataBase.insert(data1);
            const data2 = {id: 2};
            await dataBase.update(data2).catch(e => expect(e).toBe('ID not found!'));
        });
	});

    describe('truncate()', () => {
        it('clear database', async () => {
            const db = new DB;
            const data1 = {id: 1};
            const data2 = {id: 2};
            await db.insert(data1);
            await db.insert(data2);
            await db.truncate();
            const dataRows = await db.getRows();
            expect(dataRows.length).toBe(0);
        })
    })
});
