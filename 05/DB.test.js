import DB from './DB';

describe('insert', () => {
    it('', async () => {
        expect.assertions(1);

        const db = new DB();
        await db.insert({ id: 1 , name: 'dog'})
        await db.insert({ id: 2, name: 'cat'})

        const rows = await db.getRows();

        expect(rows.length).toBe(2)
    });

    it('error', async () => {
        expect.assertions(1);

        const db = new DB();

        try {
            await db.insert({ id: 'a', name: 'dog'})
            await db.insert({ id: 2, name: 'cat'})
        } catch(e) {
            expect(e).toBe('ID can be only number!')
        }
    });

    it('error', async () => {
        expect.assertions(1);

        const db = new DB();

        try {
            await db.insert({ id: 2, name: 'dog'})
            await db.insert({ id: 2, name: 'cat'})
        } catch(e) {
            expect(e).toBe('ID can\'t be duplicated!')
        }
    });

    it('add ID if it is not written', async () => {
        const db = new DB();
        const insert =  {name: 'fish'}
        const newData = await db.insert(insert)

        expect(newData).toEqual(insert)
    });
});

describe('select', () => {
    it('item with specific ID is in row', async () => {
        expect.assertions(1);

        const db = new DB();
        await db.insert({ id: 1, name: 'dog'})
        const checkForId = await db.select(1)
        expect(checkForId).toEqual({ id: 1, name: 'dog'})
    }); 

    it('error', async () => {
        expect.assertions(1);

        const db = new DB();

        try {
            await db.insert({ id: 2, name: 'cat'})
            await db.select(1)
        } catch(e) {
            expect(e).toBe('ID not found')
        }
    });
});

describe('remove', () => {
    it('item dont exist', async () => {
        expect.assertions(1);

        try {
            const db = new DB();
            await db.insert({ id: 1, name: 'dog'})
            await db.remove(2)
        } catch (e) {
            expect(e).toBe('Item not exist!')
        }
    });

    it('item was remove', async () => {
        expect.assertions(1);

        const db = new DB();
        await db.insert({ id: 1, name: 'dog'})
        const removeMessage = await db.remove(1)
        expect(removeMessage).toBe('Item was remove!')

    });
});

describe('update', () => {
    it('item dont exist', async () => {
        expect.assertions(1);

        try {
            const db = new DB();
            await db.update({name: 'dog'})
        } catch (e) {
            expect(e).toBe('ID have to be set!')
        }
    });

    it('item updated', async () => {
        expect.assertions(1);

        const db = new DB();
        await db.insert({id: 1, name: 'dog'})
        const update = await db.update({id: 1, name: 'cat'})
        expect(update).toEqual({id: 1, name: 'cat'})
    });

    it('ID not found!', async () => {
        expect.assertions(1);

        try {
        const db = new DB();
        await db.insert({id: 2, name: 'dog'})
        await db.update({id: 1, name: 'cat'})
        } catch (e) {
        expect(e).toEqual('ID not found!')
        }
    });
});