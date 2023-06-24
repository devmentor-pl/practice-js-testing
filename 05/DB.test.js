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

describe('DB', () => {
  describe('select()', () => {
    it('should resolve with the matching row if ID is found', async () => {
      const db = new DB();
      const data = { id: 1, name: 'John' };
      await db.insert(data);
      const result = await db.select(1);
      expect(result).toEqual(data);
    });

    it('should reject with an error message if ID is not found', async () => {
      const db = new DB();
      expect.assertions(1);
      try {
        await db.select(1);
      } catch (error) {
        expect(error).toBe('ID not found');
      }
    });
  });
});
