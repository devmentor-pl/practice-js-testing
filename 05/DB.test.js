import DB from './DB';

describe('DB', () => {
    describe('insert(data)', () => {
        it('Should reject when ID is not a number', () => {
            expect.assertions(1);
            const db = new DB();
            const data = { id: 'a' };
            return db.insert(data).catch(err => {
                expect(err).toBe('ID can be only number!');
            });
        });

        it('Should reject when ID is duplicated', async () => {
            expect.assertions(1);
            const db = new DB();
            const data = { id: 5 };
            await db.insert(data);
            const testedData = { id: 5 };
            try {
                await db.insert(testedData);
            } catch (err) {
                expect(err).toBe('ID can\'t be duplicated!');
            }
        });

        it('Should return data with assigned ID 1 for first added item when ID is not given', async () => {
            expect.assertions(1);
            const db = new DB();
            const testedData = { a: 'abcd' };
            const expectedResult = { a: 'abcd', id: 1 };
            await expect(db.insert(testedData)).resolves.toEqual(expectedResult);
        });

        it('Should return data with assigned ID 2 for second added item when ID is not given', async () => {
            expect.assertions(1);
            const db = new DB();
            await db.insert({ a: 'abcd', id: 1 });
            const testedData = { a: 'xyz' };
            const expectedResult = { a: 'xyz', id: 2 };
            await expect(db.insert(testedData)).resolves.toEqual(expectedResult);
        });
    });

    describe('select(id)', () => {
        it('Should return row if given ID exists', async () => {
            const db = new DB();
            const testedData1 = { a: 'abcd', id: 1 };
            const testedData2 = { a: 'xyz', id: 2 };
            await db.insert(testedData1);
            await db.insert(testedData2);
            await expect(db.select(testedData1.id)).resolves.toBe(testedData1);
            await expect(db.select(testedData2.id)).resolves.toBe(testedData2);
        });

        it('Should reject when ID is not found', async () => {
            expect.assertions(1);
            const db = new DB();
            try {
                await db.select(1);
            } catch (err) {
                expect(err).toBe('ID not found');
            }
        });
    });

    describe('remove(id)', () => {
        it('Should delete item if given ID exist', async () => {
            const db = new DB();
            const testedData = { id: 1 };
            await db.insert(testedData);
            await expect(db.remove(testedData.id)).resolves.toBe('Item was remove!');
        });

        it('Should delete just item with given ID', async () => {
            const db = new DB();
            const testedData1 = { id: 1 };
            const testedData2 = { id: 2 };
            const testedData3 = { id: 3 };
            await db.insert(testedData1);
            await db.insert(testedData2);
            await db.insert(testedData3);
            await db.remove(testedData2.id);
            const dbRows = await db.getRows();
            expect(dbRows.length).toBe(2);
        });

        it('Should reject when given ID not exist in DB', async () => {
            expect.assertions(1);
            const db = new DB();
            try {
                await db.remove(1);
            } catch (err) {
                expect(err).toBe('Item not exist!');
            }
        });
    });

    describe('update(data)', () => {
        it('Should reject when ID is not set', async () => {
            expect.assertions(1);
            const db = new DB();
            const testedData = { a: 'xyz', id: 1 };
            await db.insert(testedData);
            const updatedTestedData = { a: 'abc' };
            try {
                await db.update(updatedTestedData);
            } catch (err) {
                expect(err).toBe('ID have to be set!');
            }
        });

        it('Should update existing data if ID of given data is found in DB', async () => {
            expect.assertions(1);
            const db = new DB();
            const testedData = { a: 'xyz', id: 1 };
            await db.insert(testedData);
            const updatedTestedData = { a: 'abc', id: 1 };
            await expect(db.update(updatedTestedData)).resolves.toBe(updatedTestedData);
        });

        it('Should reject when given ID is not found in DB', async () => {
            expect.assertions(1);
            const db = new DB();
            const testedData1 = { id: 1 };
            await db.insert(testedData1);
            const testedData2 = { id: 2 };
            try {
                await db.update(testedData2);
            } catch (err) {
                expect(err).toBe('ID not found!');
            }
        });
    });

    describe('truncate()', () => {
        it('Should clear DB', async () => {
            const db = new DB();
            const testedData1 = { id: 1 };
            const testedData2 = { id: 2 };
            await db.insert(testedData1);
            await db.insert(testedData2);
            await db.truncate();
            const dbRows = await db.getRows();
            expect(dbRows.length).toBe(0);
        });

        it('Should return true when resolved', async () => {
            const db = new DB();
            const testedData1 = { id: 1 };
            await db.insert(testedData1);
            await expect(db.truncate()).resolves.toBe(true);
        });
    });

    describe('getRows()', () => {
        it('Should return empty array when no data in DB', async () => {
            const db = new DB();
            const expectedResult = [];
            await expect(db.getRows()).resolves.toEqual(expectedResult);
        });

        it('Should return array with DB data', async () => {
            const db = new DB();
            const testedData1 = { id: 1 };
            const testedData2 = { id: 2 };
            await db.insert(testedData1);
            await db.insert(testedData2);
            const expectedResult = [testedData1, testedData2];
            await expect(db.getRows()).resolves.toEqual(expectedResult);
        })
    })
})