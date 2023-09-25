import DB from './DB';

describe('.insert(data)', () => {
  it('return 1 when one item inserted', async () => {
    const db = new DB();
    await db.insert({ id: 1, name: 'element 01' });
    const rows = await db.getRows();

    expect(rows.length).toBe(1);
  });

  it('throw error when id is duplicated', async () => {
    expect.assertions(1);

    const db = new DB();
    try {
      await db.insert({ id: 2, name: 'element 02' });
      await db.insert({ id: 2, name: 'element 03' });
    } catch (err) {
      expect(err).toBe("ID can't be duplicated!");
    }
  });

  it('throw error when id is not a number', async () => {
    expect.assertions(1);

    const db = new DB();
    try {
      await db.insert({ id: '4', name: 'element 04' });
    } catch (err) {
      expect(err).toBe('ID can be only number!');
    }
  });

  it('iserted data is correct', async () => {
    const data = { id: 5, name: 'element 05' };
    const db = new DB();
    const insertedData = await db.insert(data);
    expect(insertedData).toEqual(data);
  });
});

describe('.select(id)', () => {
  it('return ID of selected row', async () => {
    const data = { id: 6, name: 'element 06' };
    const db = new DB();
    await db.insert(data);

    expect(data.id).toBe(6);
  });
  it('throw error when ID not found', async () => {
    expect.assertions(1);

    const data = { id: 7, name: 'element 07' };
    const db = new DB();
    await db.insert(data);

    try {
      await db.select(8);
    } catch (err) {
      expect(err).toBe('ID not found');
    }
  });
});

describe('.remove(id)', () => {
  it('remove element by ID', async () => {
    const db = new DB();
    await db.insert({ id: 9, name: 'element 09' });
    await db.insert({ id: 10, name: 'element 10' });
    await db.insert({ id: 11, name: 'element 11' });

    const deletedData = await db.remove(9);

    expect(deletedData).toBe('Item was remove!');
  });

  it('ID of deleted element not exist', async () => {
    expect.assertions(1);

    const db = new DB();
    await db.insert({ id: 12, name: 'element 12' });

    try {
      await db.remove(13);
    } catch (err) {
      expect(err).toBe('Item not exist!');
    }
  });
});

describe('.update(data)', () => {
  it('update data', async () => {
    const data = { id: 14, name: 'element 14' };
    const newData = { id: 14, name: 'element 14 updated' };
    const db = new DB();
    await db.insert(data);
    const updatedData = await db.update(newData);

    expect(updatedData).toEqual(newData);
  });
  it('throw error when ID does not exist', async () => {
    expect.assertions(1);

    const data = { id: 15, name: 'element 15' };
    const db = new DB();
    await db.insert(data);

    try {
      await db.update(16);
    } catch (err) {
      expect(err).toBe('ID have to be set!');
    }
  });
});

describe('.truncate()', () => {
  it('remove all elements', async () => {
    const db = new DB();
    await db.insert({ id: 17, name: 'element 17' });
    await db.insert({ id: 18, name: 'element 18' });
    await db.insert({ id: 19, name: 'element 19' });

    const truncate = await db.truncate();

    expect(truncate).toBe(true);
  });
});
