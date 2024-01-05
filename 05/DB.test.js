import DB from './DB';
describe('DB - insert', () => {
    it('should insert a new item corectly', async () => {

        const db = new DB();

        const data = { id: 1, name: "test" };
        const response = await db.insert(data);

        expect(response).toEqual(data);
    })
    it('should reject insertion with duplicate ID', async () => {

        expect.assertions(1);
        const db = new DB();

        await db.insert({ id: 1, name: "Test1" });
        try {
            await db.insert({ id: 1, name: "Test2" });
        } catch (e) {
            expect(e).toEqual('ID can\'t be duplicated!')
        }
    })
    it('should reject insertion if ID is not a number', async () => {

        const db = new DB();
        const data = { id: 'hummus', name: 'Test1' }
        try {
            await db.insert(data);
        } catch (e) {
            expect(e).toEqual('ID can be only number!')
        }
    })
})
describe('DB - select', () => {
    it('should resolve with selected row', async () => {

        const db = new DB();
        const data = { id: 1, name: "test" };
        const response = await db.insert(data)

        const selectedRow = await db.select(1);

        expect(selectedRow).toEqual(response)
    })
    it('should reject the promise if ID is not found', async () => {

        const db = new DB();
        const data = { id: 1, name: "test" };

        try {
            await db.insert(data);
        } catch (e) {
            expect(e).toEqual('ID not found');
        }
    })
})
describe('DB -  remove', () => {
    it('should remove item by ID', async () => {

        const db = new DB();
        const data = { id: 1, name: 'test' }
        await db.insert(data);
        await db.remove(1);
        const result = await db.getRows

        expect(result).toHaveLength(0);

    })
    it('should reject promise if item does not exist', async () => {

        expect.assertions(1)
        const db = new DB();

        try {
            await db.remove(1)
        } catch (e) {
            expect(e).toEqual('Item not exist!');
        }

    })
})
describe('DB - update', () => {
    it('should update item by ID', async () => {
        expect.assertions(1);
        const db = new DB();
        const initialData = { id: 1, name: 'John Doe' };
        const updatedData = { id: 1, name: 'Updated Name' };
        await db.insert(initialData);

        const result = await db.update(updatedData);

        expect(result).toEqual(updatedData)

    })
})