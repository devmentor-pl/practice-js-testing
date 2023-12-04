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
