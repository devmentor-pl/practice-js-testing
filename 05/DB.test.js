import DB from './DB';

describe('DB', () => {
  let db;

  beforeEach(() => {
    db = new DB();
  });

  afterEach(() => {
    db = null;
  });

  describe('Insert method', () => {
    it('Should insert data and resolve with the inserted data', async () => {
      const data = { id: 1, name: 'John' };
      const result = await db.insert(data);
      expect(result).toEqual(data);
    });

    it('Should generate an ID and resolve with the inserted data if ID is not provided', async () => {
      const data = { name: 'Jane' };
      const result = await db.insert(data);
      expect(result.id).toBeDefined();
      expect(result.name).toBe('Jane');
    });

    it('Should reject with an error if data has a non-numeric ID', async () => {
      const data = { id: 'invalid', name: 'John' };
      await expect(db.insert(data)).rejects.toMatch('ID can be only number!');
    });

    it('Should reject with an error if data with the same ID already exist', async () => {
      const data1 = { id: 1, name: 'Alice' };
      const data2 = { id: 1, name: 'Bob' };
      await db.insert(data1);
      await expect(db.insert(data2)).rejects.toMatch("ID can't be duplicated!");
    });
  });

  describe('Select method', () => {
    it('Should resolve with the selected data if the ID exists', async () => {
      const data = { id: 1, name: 'Charlie' };
      await db.insert(data);
      const result = await db.select(1);
      expect(result).toEqual(data);
    });
  });

  describe('Remove method', () => {
    it('Should resolve with a success message if the item is removed', async () => {
      const data = { id: 1, name: 'David' };
      await db.insert(data);
      const result = await db.remove(1);
      expect(result).toBe('Item was remove!');
      const rows = await db.getRows();
      expect(rows.length).toBe(0);
    });

    it('Should reject with an error if the item does not exist', async () => {
      await expect(db.remove(123)).rejects.toMatch('Item not exist!');
    });
  });

  describe('Update method', () => {
    it('Should resolve with the updated data if the ID exists', async () => {
      const data = { id: 1, name: 'Eve' };
      await db.insert(data);
      const updatedData = { id: 1, name: 'Updated Eve' };
      const result = await db.update(updatedData);
      expect(result).toEqual(updatedData);

      const rows = await db.getRows();
      const updatedRow = rows.find((row) => row.id === updatedData.id);
      expect(updatedRow).toEqual(updatedData);
    });

    it('Should reject with an error if the ID does not exist', async () => {
      const data = { id: 1, name: 'Grey' };
      await db.insert(data);
      const updatedData = { id: 123, name: 'Updated Grey' };
      await expect(db.update(updatedData)).rejects.toMatch('ID not found');
    });

    it('Should reject with an error if ID is not provided', async () => {
      const data = { id: 1, name: 'Grace' };
      await db.insert(data);
      const updatedData = { name: 'Updated Grace' };
      await expect(db.update(updatedData)).rejects.toMatch(
        'ID have to be set!'
      );
    });
  });

  describe('Truncate method', () => {
    it('Should resolve with true after truncating the database', async () => {
      await db.insert({ id: 1, name: 'Hank' });
      await db.insert({ id: 2, name: 'Ivy' });
      const result = await db.truncate();
      expect(result).toBe(true);
      const rows = await db.getRows();
      expect(rows.length).toBe(0);
    });
  });

  describe('getRows method', () => {
    it('Should resolve with an array of rows in the database', async () => {
      const data1 = { id: 1, name: 'Jack' };
      const data2 = { id: 2, name: 'Kate' };
      await db.insert(data1);
      await db.insert(data2);
      const rows = await db.getRows();
      expect(rows).toEqual([data1, data2]);
    });
  });
});
