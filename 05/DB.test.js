import DB from './DB';

describe('Database', () => {
    describe('insert()', () => {
        it('Should resolve when item added to database',
            async () => {
                const db = new DB();
                const newItem = { a: 1, b: 2 };
                return expect(db.insert(newItem))
                    .resolves.toBe(newItem);
            });

        it('Should return size of DB = 2 when two items inserted',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2 });
                await db.insert({ a: 3, b: 4 });

                const dbRows = await db.getRows();
                const dbSize = dbRows.length;
                expect(dbSize).toBe(2);
            });

        it('Should return id: 1 when first item inserted',
            async () => {
                const db = new DB();
                const result = await db.insert({ a: 1, b: 2 });

                expect(result.id).toBe(1);
            });

        it('Should reject when id is not a number',
            async () => {
                const db = new DB();
                const itemData = { id: 'some string', a: 1, b: 2 };
                return expect(db.insert(itemData))
                    .rejects.toBe('ID can be only number!');
            });

        it('Should reject when id is duplicated',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });


                const duplicatedItemID = { a: 3, b: 4, id: 1 };
                return expect(db.insert(duplicatedItemID))
                    .rejects.toBe('ID can\'t be duplicated!');
            });
    });
    describe('select()', () => {
        it('Should resolve when id is found',
            async () => {
                const db = new DB();
                const itemData = await db.insert({ id: 2, a: 1, b: 2 });
                return expect(db.select(2))
                    .resolves.toBe(itemData);
            });

        it('Should reject when id is not found',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });

                const wrongID = 3
                return expect(db.select(wrongID))
                    .rejects.toBe('ID not found');
            });
    });

    describe('remove()', () => {
        it('Should resolve when item is removed',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });

                const idToRemove = 1;
                return expect(db.remove(idToRemove))
                    .resolves.toBe('Item was remove!');
            });

        it('Should reject when item to remove is not found',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });

                const wrongIdToRemove = 2;
                return expect(db.remove(wrongIdToRemove))
                    .rejects.toBe('Item not exist!');
            });

        it('Should return 1 after removing item from DB',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });
                await db.insert({ a: 3, b: 4, id: 2 });

                const idToRemove = 2;
                await db.remove(idToRemove);

                const dbRows = await db.getRows();
                const dbSize = dbRows.length;
                await expect(dbSize).toBe(1);
            });

        it('Should return correct array when item removed from DB',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });
                await db.insert({ a: 3, b: 4, id: 2 });
                await db.insert({ a: 5, b: 6, id: 3 });

                await db.remove(2);

                const result = [
                    { a: 1, b: 2, id: 1 },
                    { a: 5, b: 6, id: 3 }
                ];

                await expect(db.getRows())
                    .resolves.toEqual(result);
            })
    });

    describe('update()', () => {
        it('Should resolve when return updated item',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 2 });

                const updatedData = { a: 3, b: 4, id: 2 };;
                await expect(db.update(updatedData))
                    .resolves.toEqual(updatedData);
            });

        it('Should reject when id to update is not found',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 2 });

                const notExistingID = 3
                await expect(db.update({ a: 3, b: 4, id: notExistingID }))
                    .rejects.toBe('ID not found!');
            });

        it('Should reject when id to update is not inserted',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 2 });

                await expect(db.update({ a: 3, b: 4 }))
                    .rejects.toBe('ID have to be set!');
            });
    });

    describe('truncate()', () => {
        it('Should return size of DB = 0 after clearing',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });
                await db.insert({ a: 3, b: 4, id: 2 });
                await db.insert({ a: 5, b: 6, id: 3 });

                await db.truncate();

                const dbSize = db._rows.length;
                await expect(dbSize).toBe(0);
            });

        it('Should resolve true when DB is cleared',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });
                await db.insert({ a: 3, b: 4, id: 2 });
                await db.insert({ a: 5, b: 6, id: 3 });

                await expect(db.truncate())
                    .resolves.toBe(true);
            });

        it('Should reject when DB is empty',
            async () => {
                const db = new DB();

                await expect(db.truncate())
                    .rejects.toBe('Database is empty.');
            });
    });

    describe('getRows()', () => {
        it('Should return items contained to DB',
            async () => {
                const db = new DB();
                await db.insert({ a: 1, b: 2, id: 1 });
                await db.insert({ a: 3, b: 4, id: 2 });

                const result = [
                    { a: 1, b: 2, id: 1 },
                    { a: 3, b: 4, id: 2 }
                ];
                await expect(db.getRows())
                    .resolves.toEqual(result);
            });

        it('Should reject when DB is empty',
            async () => {
                const db = new DB();

                await expect(db.getRows())
                    .rejects.toBe('Database is empty.');
            })
    });
});