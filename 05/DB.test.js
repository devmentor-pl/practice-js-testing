import DB from './DB';

describe('.insert()', () => {
    it('return 1 when one item inserted', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Michal' })
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    })
    it('reject when id nota a number', async () => {
        expect.assertions(1)

        const db = new DB();
        try {
            await db.insert({ id: '1', name: 'Michal' })
            // const rows = await db.getRows();
        } catch (err) {
            expect(err).toBe('ID can be only number!');
        }
    })
    it('reject when id duplicated', async () => {
        expect.assertions(1)

        const db = new DB();
        try {
            await db.insert({ id: 1, name: 'Michal' })
            await db.insert({ id: 1, name: 'Michal Wasiak' })

        } catch (err) {
            expect(err).toBe('ID can\'t be duplicated!');
        }
    })
    it('inserted data correct', async () => {
        const data = { id: 1, name: 'Michal' }

        const db = new DB();
        const insertedData = await db.insert(data)

        expect(insertedData).toEqual(data)
    })
});

describe('.select()', () => {
    it('select() should return row with given id', async () => {
        const db = new DB();

        const insertedRow = await db.insert({ a: 1, b: 2, c: 3 });
        const selectedRow = await db.select(insertedRow.id);

        expect(selectedRow).toEqual(insertedRow);
    });

    it('.select() check if id exist', async () => {
        expect.assertions(1)

        const db = new DB();
        try {
            await db.select(1)
        } catch (err) {
            expect(err).toBe('ID not found')
        }
    })
});

describe('.remove()', () => {
    it('remove() should return row with given id', async () => {
        const db = new DB();

        const insertedRows = await db.insert({ a: 1 });
        const removeRows = await db.remove(insertedRows.id);
        const checkRemovedRows = await db.getRows()

        expect(removeRows).toEqual('Item was remove!');
        expect(checkRemovedRows).toHaveLength(0)
    });

    it('remove() item not found', async () => {
        expect.assertions(1)
        const db = new DB();
        try {
            await db.remove(123);

        } catch (err) {
            expect(err).toBe('Item not exist!');
        }
    });
})

describe('.update() should update with given id', () => {
    it('update() should return row with given id', async () => {
        const db = new DB();

        const insertedRow = await db.insert({ a: 1 });

        await db.update({ id: insertedRow.id, a: 2 })
        const updatedRow = await db.select(insertedRow.id)

        expect(updatedRow.a).toBe(2)

    });

    it('update() item not found', async () => {
        expect.assertions(1)

        const db = new DB();
        try {
            await db.update({ id: 123, a: 2 });

        } catch (err) {
            expect(err).toBe('ID not found!');
        }
    });

    it('update() item not set', async () => {
        expect.assertions(1)

        const db = new DB();
        try {
            await db.update({ a: 2 });

        } catch (err) {
            expect(err).toBe('ID have to be set!');
        }
    });

})
