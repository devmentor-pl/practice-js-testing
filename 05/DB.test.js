import DB from './DB';

describe('DB', () => {
    describe('insert', () => {
        test('should insert data with id', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            const result = await db.insert(data);
            expect(result).toEqual(data);
        });

        test('should insert data without id', async () => {
            const db = new DB();
            const data = { name: 'John' };
            const result = await db.insert(data);
            expect(result).toEqual({ id: 1, name: 'John' });
        });

        test('should not insert data with duplicated id', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await db.insert(data);
            try {
                await db.insert(data);
            } catch (error) {
                expect(error).toBe('ID can\'t be duplicated!');
            }
        });

        test('should not insert data with id as string', async () => {
            const db = new DB();
            const data = { id: '1', name: 'John' };
            try {
                await db.insert(data);
            } catch (error) {
                expect(error).toBe('ID can be only number!');
            }
        });
    });

    describe('select', () => {
        test('should select data by id', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await db.insert(data);
            const result = await db.select(1);
            expect(result).toEqual(data);
        });

        test('should reject with an error when id is not found', async () => {
            const db = new DB();
            await expect(db.select(1)).rejects.toBe('ID not found');
        });
    });

    describe('remove', () => {
        test('should remove data by id', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await db.insert(data);
            const result = await db.remove(1);
            expect(result).toBe('Item was remove!');
        });

        test('should reject with an error when id is not found', async () => {
            const db = new DB();
            await expect(db.remove(1)).rejects.toBe('Item not exist!');
        });
    });

    describe('update', () => {
        test('should update data by id', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await db.insert(data);
            const updatedData = { id: 1, name: 'Jane' };
            const result = await db.update(updatedData);
            expect(result).toEqual(updatedData);
        });

        test('should reject with an error when id is not set', async () => {
            const db = new DB();
            const data = { name: 'John' };
            await expect(db.update(data)).rejects.toBe('ID have to be set!');
        });

        test('should reject with an error when id is not found', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await expect(db.update(data)).rejects.toBe('ID not found!');
        });
    });

    describe('truncate', () => {
        test('should truncate all data', async () => {
            const db = new DB();
            const data = { id: 1, name: 'John' };
            await db.insert(data);
            const result = await db.truncate();
            expect(result).toBe(true);
            const rows = await db.getRows();
            expect(rows).toEqual([]);
        });
    });

    describe('getRows', () => {
        test('should get all rows', async () => {
            const db = new DB();
            const data1 = { id: 1, name: 'John' };
            const data2 = { id: 2, name: 'Jane' };
            await db.insert(data1);
            await db.insert(data2);
            const result = await db.getRows();
            expect(result).toEqual([data1, data2]);
        });
    });
});