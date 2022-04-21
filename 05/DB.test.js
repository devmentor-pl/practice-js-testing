import DB from './DB';

it('return 0 when database empty', async () => {
    const db = new DB();
    const rows = await db.getRows();
    expect(rows.length).toBe(0);
});

it('return 1 when one item inserted', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    const rows = await db.getRows();
    expect(rows.length).toBe(1);
});

it('reject(ID can be only number!) when id not a number', async () => {
    expect.assertions(1);
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
    const firstRow = await db.insert({a: 3, b: 4});
    expect(firstRow.id).toBe(1);
});

it('return item when ID exists', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    const resp = await db.select(1);
    expect(resp).toStrictEqual({a: 3, b: 4, id: 1});
});

it('reject(ID not found) when ID dosnt exist', async () => {
    expect.assertions(1);
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
    await db.insert({a: 6, b: 7});
    await db.remove(2);
    const rows = await db.getRows();
    expect(rows.length).toBe(1);
});

it('reject(ID have to be set!) if ID not provided', async () => {
    expect.assertions(1);
    try{
        const db = new DB();
        const data = {a: 5, b: 5}
        await db.update(data);
    } catch(err) {
        expect(err).toBe('ID have to be set!');
    }
});

it('reject(ID not found!) if ID not found', async () => {
    expect.assertions(1);
    try{
        const db = new DB();
        const data = {a: 5, b: 5, id:1}
        await db.update(data);
    } catch(err) {
        expect(err).toBe('ID not found!');
    }
});

it('asign new item if update', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    const data = {a: 5, b: 5, id:1}
    const updatedData = await db.update(data);
    expect(updatedData).toBe(data);
});

it('return rows.length = 0 when rows cleared ', async () => {
    const db = new DB();
    await db.insert({a: 3, b: 4});
    await db.truncate();
    const rows = await db.getRows();
    expect(rows.length).toBe(0);
});

it('return true when rows cleared', async () => {
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