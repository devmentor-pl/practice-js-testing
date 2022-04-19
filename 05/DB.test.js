import DB from './DB';

it('return 0 when database empty', () => {
    const db = new DB();
    expect(db._rows.length).toBe(0);
});

it('return 1 when one item inserted', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    expect(db._rows.length).toBe(1);
});

it('reject(ID can be only number!) when id not a number', async () => {
    expect.assertions(1)
    try {
        const db = new DB();
        await db.insert({a: 4, b: 5, id: '2'});
    } catch(err) {
        expect(err).toBe('ID can be only number!');
    }
});

it('reject(ID can\'t be duplicated!) when ID duplicated', async () => {
    expect.assertions(1);
    try{
        const db = new DB();
        await db.insert({a: 4, b: 5, id: 1})
        await db.insert({a: 4, b: 5, id: 1})
    } catch(err) {
        expect(err).toBe('ID can\'t be duplicated!');
    }
});

it('add ID to item if dosnt exist', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    expect(db._rows[0].id).toBe(1);
});

it('return item when ID exists', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    const resp = await db.select(1);
    expect(resp).toStrictEqual({a: 3, b: 4, id: 1});
});

it('reject(ID not found) when ID dosnt exist', async () => {
    try{
        const db = new DB();
        await db.insert({a: 3, b: 4});
        await db.select(2);
    } catch(err) {
        expect(err).toBe('ID not found');
    }
});

it('return 1 if item removed', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    await db.insert({a: 3, b: 4});
    await db.remove(2);
    expect(db._rows.length).toBe(1);
});

it('reject(ID have to be set!) if ID not provided', async () => {
    try{
        const db = new DB();
        const data = {a: 5, b: 5}
        await db.update(data);
    } catch(err) {
        expect(err).toBe('ID have to be set!');
    }
});

it('reject(ID not found!) if ID not found', async () => {
    try{
        const db = new DB();
        const data = {a: 5, b: 5, id:1}
        await db.update(data);
    } catch(err) {
        expect(err).toBe('ID not found!');
    }
});

it('asign new item if update ', async () => {
        const db = new DB();
        await db.insert({a: 3, b: 4});
        const data = {a: 5, b: 5, id:1}
        await db.update(data);
        expect(db._rows[0]).toBe(data);
});

it('return db.length = 0 when cleared ', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    await db.truncate();
    expect(db._rows.length).toBe(0)
});

it('return true when DB cleared', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    const resp = await db.truncate();
    expect(resp).toBe(true)
});

it('return array when call getRows()', async () => {
    const db = new DB();
    const resp = await db.getRows();
    expect(resp).toStrictEqual([]);
});

it('return ', async () => {
    const db = new DB();
    const resp = await db.getRows();
    expect(resp).toStrictEqual([]);
});

