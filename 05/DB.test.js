import DB from './DB';

describe('Database', () => {
    describe('insert', () => {
        it('Should return ID: 1 when insert first database item',
            async () => {
                const db = new DB();
                const data = { a: 1, b: 2 };
                const result = await db.insert(data);

                expect(result.id).toBe(1);
            });
    })
})