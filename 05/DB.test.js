import DB from './DB';

describe('.insert()', () => {
    it('return 1 when one item inserted', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });

    it('reject when id is not a number', async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({ id: '1', name: 'Marta' });
        } catch (error) {
            expect(error).toBe('ID can be only number!');
        };
    });

    it('reject when id is duplicated', async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({ id: 1, name: 'Marta' });
            await db.insert({ id: 1, name: 'Magda' });
        } catch (error) {
            expect(error).toBe('ID can\'t be duplicated!');
        };
    });

    it('inserted data should be correct', async () => {
        const db = new DB();
        const data = { id: 1, name: 'Marta' };
        const insertedData = await db.insert(data);

        expect(insertedData).toEqual(data)
    });
});

describe('.select()', () => {
    it('rejected when ID not found', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        try {
            await db.select(2);
        } catch (error) {
            expect(error).toBe('ID not found');
        };
    });
    it('inserted data can be selected', async () => {
        expect.assertions(1);
        const db = new DB();
        const data = { id: 1, name: 'Marta' };
        await db.insert(data);
        const selectedData = await db.select(1);
        expect(selectedData).toEqual(data);
    });
});

describe('.remove()', () => {
    it('should return rows without removed row', async () => {
        expect.assertions(2);
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        await db.insert({ id: 2, name: 'Magda' });
        await db.insert({ id: 3, name: 'Monika' });
        await db.remove(1);
        await db.remove(3);
        const rows = await db.getRows();
        expect(rows.length).toBe(1);
        expect(rows).toEqual([{ id: 2, name: 'Magda' }]);
    });
    it('rejected when ID not exist', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        await db.insert({ id: 2, name: 'Magda' });
        try {
            await db.remove(3);
        } catch (error) {
            expect(error).toBe('Item not exist!');
        };
    });
});

describe('.update()', () => {
    it('should reject when id is not set', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        try {
            await db.update({ name: 'Magda' });
        } catch (error) {
            expect(error).toBe('ID have to be set!');
        };
    });
    it('should reject when id is not found', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        try {
            await db.update({ id: 3, name: 'Magda' });
        } catch (error) {
            expect(error).toBe('ID not found!');
        };
    });
    it('should return updated row', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        const updatedData = { id: 1, name: 'Magda' };
        await db.update(updatedData);
        const rows = await db.getRows();
        expect(rows).toEqual([updatedData]);
    });
});

describe('.truncate()', () => {
    it('should return 0 when is truncate', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Marta' });
        await db.insert({ id: 2, name: 'Magda' });
        await db.truncate();
        const rows = await db.getRows();
        expect(rows.length).toBe(0);
    });
});