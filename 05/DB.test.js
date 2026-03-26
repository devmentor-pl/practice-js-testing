import DB from './DB';

describe('DB.js', () => {
  describe('.insert(data)', () => {
    it('should throw exception if data.id is not a number', async () => {
      const db = new DB();
      await expect(db.insert({ id: "adc" })).rejects.toBe('ID can be only number!')
    });

    it('should throw exception if data.id already exists in db', async () => {
      const db = new DB([{ id: 2 }]);
      await expect(db.insert({ id: 2 })).rejects.toBe('ID can\'t be duplicated!')
    });

    it('should create next highest number of index for data to store', async () => {
      const db = new DB([{ id: 4 }]);
      await expect(db.insert({})).resolves.toEqual({ id: 5 })
    })
  });

  describe('.select(id)', () => {
    it('should throw exception if data.id is not found', async () => {
      const db = new DB([{ id: 1 }]);
      await expect(db.select(2)).rejects.toBe('ID not found')
    });

    it('should return item with selected id', async () => {
      const db = new DB([{ id: 2 }]);
      await expect(db.select(2)).resolves.toEqual({ id: 2 })
    })
  });

  describe('.remove(id)', () => {
    it("should throw exception if item id doesn't exist", async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.remove(3)).rejects.toBe('Item not exist!')
    });

    it('should resolve when item with selected id gets removed', async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.remove(2)).resolves.toBe('Item was removed!')
    })
  });

  describe('.update(data)', () => {
    it("should throw exception if item id isn't set", async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.update({})).rejects.toBe('ID have to be set!')
    });

    it('should return updated data obj if successfully updated', async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.update({ id: 2 })).resolves.toEqual({ id: 2 })
    });

    it("should throw exception if item id doesn't exist", async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.update({ id: 3 })).rejects.toBe('ID not found!')
    })
  });

  describe('.truncate()', () => {
    it('Should return true if successfully truncated data', async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.truncate()).resolves.toBe(true)
    })
  });

  describe('.getRows()', () => {
    it('Should return this._rows on resolve', async () => {
      const db = new DB([{ id: 1 }, { id: 2 }]);
      await expect(db.getRows()).resolves.toEqual([{ id: 1 }, { id: 2 }])
    })
  });
})