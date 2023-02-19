import DB from './DB';

describe('Database', () => {
    describe('insert', () => {
        it('Should return 2 when insert 2 items to database',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2 });
                await db.insert({ a: 3, b: 4 });

                const dbSize = db._rows.length;

                expect(dbSize).toBe(2);
            });

        it('Should return ID: 1 when insert first database item',
            async () => {
                const db = new DB();
                const itemData = { a: 1, b: 2 };
                const result = await db.insert(itemData);

                expect(result.id).toBe(1);
            });

    })
})