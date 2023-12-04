import DB from './DB';

describe('DB - insert', () => {
    it('should insert a new item correctly', async () => {
        const db = new DB();
        await expect(db.insert({ id: 1, name: 'Test' })).resolves.toEqual({ id: 1, name: 'Test' });
    });

    it('should reject insertion with non-numeric ID', async () => {
        const db = new DB();
        await expect(db.insert({ id: 'a', name: 'Test' })).rejects.toMatch('ID can be only number!');
    });
    
    it('should reject insertion with duplicate ID', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Test' });
        await expect(db.insert({ id: 1, name: 'Duplicate' })).rejects.toMatch('ID can\'t be duplicated!');
    });
});

describe(DB - Selection, () => {
    it('should select and item by ID', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Test' });
        await expect(db.select(1)).resolves.toEqual({ id: 1, name: 'Test'});;
    });

    it('should reject when ID not found', async () => {
        const db = new DB();
        await expect(db.select(999)).rejects.toMatch('ID not found');
    });
});

describe('DB - remove', () => {
    it('should remove an item by ID', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Test' });
        await expect(db.remove(1)).resolves.toMatch('Item was remove!');
    });

    it('should reject when trying to remove an item that does not exist', async () => {
        const db = new DB();
        await expect(db.remove(999)).rejects.toMatch('Item not exist!');
    });
});

describe('DB - update', () => {
    it('should update an item', async () => {
        const db = new DB();
        await db.insert({ id: 1, name: 'Test' });
        await expect(db.update({ id: 1, name: 'Updated' })).resolves.toEqual({ id: 1, name: 'Updated' });
    });

    it('should reject update without ID', async () => {
        const db = new DB();
        await expect(db.update({ name: 'No ID' })).rejects.toMatch('ID have to be set!');
    });

    it('should reject when trying to update an item with non-existing ID', async () => {
        const db = new DB();
        await expect(db.update({ id: 999, name: 'Not Found' })).rejects.toMatch('ID not found!');
    });
});

describe('DB - truncate', () => {
    it('should truncate all items', async () => {
        const db = new DB ();
        await db.insert({ id: 1, name: 'Test' });
        await expect(db.truncate()).resolves.toBe(true);
        await expect(db.getRows()).resolves.toEqual([]);
    });
})
