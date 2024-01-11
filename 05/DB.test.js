import DB from './DB';

describe('DB', () => {
  describe('insert', async () => {
    it('Should throw exception when id not a number', async () => {
      expect.assertions(1);
      const id = 'pwd';
      const data = {
        id: id,
      };

      const db = new DB();

      try {
        await db.insert(data);
      } catch (err) {
        expect(err).toBe('ID can be only number!');
      }
    });

    it('Should throw exception when id is duplicated', async () => {
      expect.assertions(1);
      const id = 3;
      const data = {
        id: id,
      };
      const db = new DB();
      db._rows.push(data);
      try {
        await db.insert(data);
      } catch (err) {
        expect(err).toBe("ID can't be duplicated!");
      }
    });
    it('should add new id if it is correct', async () => {
      expect.assertions(2);
      const id = 4;
      const data = {
        id: id,
      };
      const db = new DB();
      const result = await db.insert(data);
      expect(result).toBe(data);
      expect(result.id).toBe(4);
    });
  });
  describe('select', async () => {
    it('show selected id if exist', async () => {
      expect.assertions(1);
      const id = 4;
      const data = {
        id: id,
      };
      const db = new DB();
      const result = await db.insert(data);
      const response = await db.select(result.id);
      expect(response).toBe(result);
    });
    it('Should throw exception when selected id is not found', async () => {
      expect.assertions(1);
      const id = 5;
      const db = new DB();
      try {
        await db.select(id);
      } catch (err) {
        expect(err).toBe('ID not found');
      }
    });
  });
  describe('remove', async () => {
    it('Should throw exception when removed item is not exist', async () => {
      expect.assertions(1);
      const id = 2;
      const db = new DB();
      try {
        await db.remove(id);
      } catch (err) {
        expect(err).toBe('Item not exist!');
      }
    });
    it('check if item is removed', async () => {
      const id = 4;
      const data = {
        id: id,
      };
      const db = new DB();
      const result = await db.insert(data);
      const response = await db.remove(id);
      expect(response).toBe('Item was remove!');
    });
  });
  describe('update', () => {
    it('should throw exception when updated id is not set', async () => {
      expect.assertions(1);
      const id = 6;
      const db = new DB();
      try {
        await db.update(id);
      } catch (err) {
        expect(err).toBe('ID have to be set!');
      }
    });
    it('check if updated item exist', async () => {
      const id = 4;
      const data = {
        id: id,
      };
      const db = new DB();
      const result = await db.insert(data);
      const response = await db.update(data);
      expect(result.id).toBe(response.id);
    });
    it('should throw exception when removed item is not exist', async () => {
      expect.assertions(1);
      const id = 6;
      const data = {
        id: id,
      };
      const db = new DB();
      try {
        await db.update(data);
      } catch (err) {
        expect(err).toBe('ID not found!');
      }
    });
  });
});
