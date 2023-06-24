import DB from './DB';

describe('.insert()', () => {
  it('return 1 when 1 item inserted', async () => {
    const db = new DB();
    await db.insert({ id: 1, name: 'Joe' });
    const rows = await db.getRows();

    expect(rows.length).toBe(1);
  });
  it('reject when id not a number', async () => {
    expect.assertions(1);
    const db = new DB();
    try {
      await db.insert({ id: '1', name: 'Joe' });
    } catch (error) {
      expect(error).toBe('ID can be only number!');
    }
  });
  it('reject when id duplicated', async () => {
    expect.assertions(1);
    const db = new DB();
    try {
      await db.insert({ id: 1, name: 'Joe' });
      await db.insert({ id: 1, name: 'Doe' });
    } catch (error) {
      expect(error).toBe("ID can't be duplicated!");
    }
  });

  it('is data correct', async () => {
    const data = { id: 1, name: 'Joe' };
    const db = new DB();
    const insertData = await db.insert(data);
    expect(insertData).toEqual(data);
  });
});
