import DB from './DB';

describe('Database', () => {
    describe('insert()', () => {
        it('Should resolve when item added to database',
            () => {
                const db = new DB();

                const newItem = { a: 1, b: 2 };
                return expect(db.insert(newItem))
                    .resolves.toBe(newItem);
            });

        it('Should return size of DB = 2 when two items inserted',
            () => {
                const db = new DB();

                return db.insert({ a: 1, b: 2 })
                    .then(() => db.insert({ a: 3, b: 4 }))
                    .then(() => db.getRows())
                    .then(dbRows => expect(dbRows.length).toBe(2));
            });

        it('Should return id: 1 when first item inserted',
            () => {
                const db = new DB();

                return db.insert({ a: 1, b: 2 })
                    .then(result => expect(result.id).toBe(1));
            });

        it('Should reject when id is not a number',
            () => {
                const db = new DB();

                const itemData = { id: 'some string', a: 1, b: 2 };
                return expect(db.insert(itemData))
                    .rejects.toMatch('ID can be only number!');
            });

        it('Should reject when id is duplicated',
            () => {
                const db = new DB();

                const duplicatedItemID = { a: 3, b: 4, id: 1 };
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => {
                        expect(db.insert(duplicatedItemID))
                            .rejects.toMatch('ID can\'t be duplicated!');
                    });
            });
    });
    describe('select()', () => {
        it('Should resolve when id is found',
            () => {
                const db = new DB();

                return db.insert({ id: 2, a: 1, b: 2 })
                    .then(result => {
                        expect(db.select(2))
                            .resolves.toBe(result);
                    });
            });

        it('Should reject when id is not found',
            () => {
                const db = new DB();

                const wrongID = 3
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => {
                        expect(db.select(wrongID))
                            .rejects.toMatch('ID not found');
                    });
            });
    });

    describe('remove()', () => {
        it('Should resolve when item is removed',
            () => {
                const db = new DB();

                const correctIdToRemove = 1;
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => {
                        expect(db.remove(correctIdToRemove))
                            .resolves.toMatch('Item was remove!');
                    });
            });

        it('Should reject when item to remove is not found',
            () => {
                const db = new DB();

                const wrongIdToRemove = 2;
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => {
                        expect(db.remove(wrongIdToRemove))
                            .rejects.toMatch('Item not exist!');
                    });
            });

        it('Should return 1 after removing item from DB',
            () => {
                const db = new DB();

                const correctIdToRemove = 2;
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                    .then(() => db.remove(correctIdToRemove))
                    .then(() => db.getRows())
                    .then(dbRows => expect(dbRows.length).toBe(1));
            });

        it('Should return correct array when item removed from DB',
            () => {
                const db = new DB();

                const result = [
                    { a: 1, b: 2, id: 1 },
                    { a: 5, b: 6, id: 3 }
                ];
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                    .then(() => db.insert({ a: 5, b: 6, id: 3 }))
                    .then(() => db.remove(2))
                    .then(() => {
                        expect(db.getRows())
                            .resolves.toEqual(result);
                    });
            });
    });

    describe('update()', () => {
        it('Should resolve when return updated item',
            () => {
                const db = new DB();

                const updatedData = { a: 3, b: 4, id: 2 };;
                return db.insert({ a: 1, b: 2, id: 2 })
                    .then(() => {
                        expect(db.update(updatedData))
                            .resolves.toEqual(updatedData);
                    });
            });

        it('Should reject when id to update is not found',
            () => {
                const db = new DB();

                const notExistingID = 3
                return db.insert({ a: 1, b: 2, id: 2 })
                    .then(() => {
                        expect(db.update({ a: 3, b: 4, id: notExistingID }))
                            .rejects.toMatch('ID not found!');
                    });
            });

        it('Should reject when id to update is not inserted',
            () => {
                const db = new DB();

                return db.insert({ a: 1, b: 2, id: 2 })
                    .then(() => {
                        expect(db.update({ a: 3, b: 4 }))
                            .rejects.toMatch('ID have to be set!');
                    });
            });
    });

    describe('truncate()', () => {
        it('Should reject getRows() when empty database',
            () => {
                const db = new DB();

                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                    .then(() => db.insert({ a: 5, b: 6, id: 3 }))
                    .then(() => db.truncate())
                    .then(() => {
                        expect(db.getRows())
                            .rejects.toMatch('Database is empty.');
                    });
            });

        it('Should resolve true when DB is cleared',
            () => {
                const db = new DB();

                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                    .then(() => db.insert({ a: 5, b: 6, id: 3 }))
                    .then(() => {
                        expect(db.truncate())
                            .resolves.toBeTruthy();
                    });
            });

        it('Should reject when DB is empty',
            () => {
                const db = new DB();

                return expect(db.truncate())
                    .rejects.toMatch('Database is empty.');
            });
    });

    describe('getRows()', () => {
        it('Should return items contained to DB',
            () => {
                const db = new DB();

                const result = [
                    { a: 1, b: 2, id: 1 },
                    { a: 3, b: 4, id: 2 }
                ];
                return db.insert({ a: 1, b: 2, id: 1 })
                    .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                    .then(() => {
                        expect(db.getRows())
                            .resolves.toEqual(result);
                    });
            });

        it('Should reject when DB is empty',
            () => {
                const db = new DB();

                return expect(db.getRows())
                    .rejects.toMatch('Database is empty.');
            });
    });
});