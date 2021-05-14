import DB from './DB';

describe('insert', () => {
    it('rejects if id is not a number', () => {
        expect.assertions(1);
        const db = new DB();
        return db.insert({id: '1', a: 1, b: 2}).catch(e => expect(e).toBe('ID can be only number!'));
    });

    it('returns data if there is no id in data', () => {
        expect.assertions(1);
        const data = {a: 1, b: 2};
        const db = new DB();
        return db.insert(data).then(result => expect(result).toBe(data));
    });

    it('returns data if data.id is a number', () => {
        expect.assertions(1);
        const data = {id: 1, a: 1, b: 2};
        const db = new DB();
        return db.insert(data).then(result => expect(result).toBe(data));
    });
});

describe('select', () => {
    it('returns object data if id was found', async () => {
        expect.assertions(1);
        const data = {id: 1, a: 1, b: 2};
        const db = new DB();
        await db.insert(data);

        return db.select(1).then(result => expect(result).toBe(data));
    });

    it('reject if id was not found', () => {
        expect.assertions(1);
        const db = new DB();
        return db.select(1).catch(e => expect(e).toBe('ID not found'));
    })
});

describe('remove', () => {
    it('returns \'Item was removed\' if id was found', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({id: 1, a: 1, b: 2});

        return db.remove(1).then(result => expect(result).toBe('Item was remove!'));
    });

    it('rejects if id was not found', () => {
        expect.assertions(1);
        const db = new DB();
        return db.remove(1).catch(e => expect(e).toBe('Item not exist!'));
    });
});

describe('update', () => {
    it('rejects if data has no id', () => {
        expect.assertions(1);
        const db = new DB();
        return db.update(1).catch(e => expect(e).toBe('ID have to be set!'));
    });

    it('returns data if updated', async () => {
        expect.assertions(1);
        const db = new DB();
        const newData = {id: 1, a: 4};
        await db.insert({id: 1, a: 1, b: 2});

        return db.update(newData).then(result => expect(result).toBe(newData));
    });

    it('rejects if id was not found', () => {
        expect.assertions(1);
        const db = new DB();

        return db.update({id: 1, a: 4, b: 2}).catch(e => expect(e).toBe('ID not found!'));
    });
});

describe('truncate', () => {
    it('returns \'true\' if truncated', () => {
        expect.assertions(1);
        const db = new DB();
        return db.truncate().then(result => expect(result).toBe(true));
    });
});

describe('getRows', () => {
    it('returns rows', () => {
        expect.assertions(1);
        const db = new DB();
        return db.getRows().then(result => expect(result).toBe(db._rows))
    })
})