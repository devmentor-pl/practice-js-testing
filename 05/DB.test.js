import DB from './DB';

it('reject when ID is not a number', () => {
    const db = new DB()
    const data = { id: 'abc' }

    const promise = db.insert(data)

    return promise.catch(result => {
        expect(result).toBe('ID can be only number!')
    })
})

it('Insert valid object', async () => {
    const data = { id: 1, name: 'John Doe' };
    const result = await db.insert(data);
    expect(result).toEqual(data);
});

it('Insert object with non-numeric ID', async () => {
    const data = { id: 'invalid', name: 'John Doe' };
    await expect(db.insert(data)).rejects.toEqual('ID can be only number!');
});

it('Insert object with duplicate ID', async () => {
    const data1 = { id: 1, name: 'John Doe' };
    await db.insert(data1);
    const data2 = { id: 1, name: 'Jane Doe' };
    await expect(db.insert(data2)).rejects.toEqual('ID can\'t be duplicated!');
});

it('Select existing ID', async () => {
    const data = { id: 1, name: 'John Doe' };
    await db.insert(data);

    const result = await db.select(1);
    expect(result).toEqual(data);
});

it('Select non-existing ID', async () => {
    await expect(db.select(2)).rejects.toEqual('ID not found');
});
it('Remove existing ID', async () => {
    const data = { id: 1, name: 'John Doe' };
    await db.insert(data);

    const result = await db.remove(1);
    expect(result).toEqual('Item was remove!');
});

it('Remove non-existing ID', async () => {
    await expect(db.remove(2)).rejects.toEqual('Item not exist!');
});

it('Update existing ID', async () => {
    const data = { id: 1, name: 'John Doe' };
    await db.insert(data);

    const updatedData = { id: 1, name: 'Updated Name' };
    const result = await db.update(updatedData);
    expect(result).toEqual(updatedData);
});

it('Update non-existing ID', async () => {
    const data = { id: 1, name: 'John Doe' };
    await expect(db.update(data)).rejects.toEqual('ID not found!');
});

it('Get rows from non-empty database', async () => {
    const data = { id: 1, name: 'John Doe' };
    await db.insert(data);

    const rows = await db.getRows();
    expect(rows).toEqual([data]);
});