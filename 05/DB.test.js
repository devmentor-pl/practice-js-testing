import DB from './DB';

describe('insert', () => {
    test('data is correct', async () => {
        expect.assertions(2);
        const db = new DB()
        const rowsBefore = await db.getRows()
        expect(rowsBefore.length).toBe(0);
        db.insert({
            name: 'Piotr'
        })
        const rowsAfter = await db.getRows()
        expect(rowsAfter.length).toBe(1);
    });

    test('id is not a number', async () => {
        expect.assertions(1);

        const db = new DB()


        try {
            await db.insert({
                name: 'Patryk',
                id: 'wgawwrg'
            })
        } catch (e) {
            expect(e).toMatch("ID can be only number")
        }
    })
});

describe('remove()', () => {
    test('item not found', async () => {
        expect.assertions(1);
        const removeEl = new DB();
        const id = 1;
        try {
            await removeEl.remove(id)

        } catch (e) {
            expect(e).toMatch('Item not exist!')
        }

    });
});

describe('update()', () => {
    test('ID is not set', async () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            name: "Patryk"
        };
        await db.update(data).catch(e => expect(e).toBe('ID have to be set!'));
    });
});  