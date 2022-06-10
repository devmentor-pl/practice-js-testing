import DB from './DB';

describe(`DB`, () => {
    const db = new DB();
    describe('insert()', () => {
        it(`if function invoked without argument`, () => {
            expect(() => { db.insert() }).toThrow();
        });

        it(`if data.id is not a number`, async () => {
            await expect(db.insert({ 'id': 'a' })).rejects.toBe('ID can be only number!');
        });

        it(`if id will duplicated`, async () => {
            const fakeData = { 'a': 'abc', 'id': 2 };
            db._rows.push(fakeData);

            await expect(db.insert({ 'b': 'def', 'id': 2 })).rejects.toBe('ID can\'t be duplicated!');
        });

        it(`id doesn't exist`, async () => {
            await expect(db.insert({ 'a': 'abc' })).resolves.toStrictEqual({ 'a': 'abc', 'id': 3 })
        });
    });
    describe('select()', () => {
        it(`id is not a number`, () => {
            expect(() => { db.select('a') }).toThrow();
        });

        it(`select method doesn't has argument`, () => {
            expect(() => { db.select() }).toThrow();
        });

        it(`id not find`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 2 }];
            await expect(db.select(1)).rejects.toBe('ID not found');
        });

        it(`id was successful`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 1 }];
            await expect(db.select(1)).resolves.toStrictEqual({ 'a': 'abc', 'id': 1 });
        });
    });
    describe('remove()', () => {
        it(`id is not a number`, () => {
            expect(() => { db.remove('a') }).toThrow();
        });

        it(`select method doesn't has argument`, () => {
            expect(() => { db.remove() }).toThrow();
        });

        it(`item remove`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 2 }, { 'b': 'def', 'id': 4 }];
            await expect(db.remove(4)).resolves.toBe('Item was remove!');
        });

        it(`item not exist`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 2 }, { 'b': 'def', 'id': 5 }];
            await expect(db.remove(4)).rejects.toBe('Item not exist!');
        });
    });
    describe('update()', () => {
        it(`if function invoked without argument`, () => {
            expect(() => { db.update() }).toThrow();
        });

        it(`id doesn't exist`, async () => {
            await expect(db.update({ 'a': 'abc' })).rejects.toBe('ID have to be set!');
        });

        it(`if id not found`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 3 }, { 'b': 'def', 'id': 5 }];
            await expect(db.update({ 'a': 'abc', 'id': 2 })).rejects.toBe('ID not found!');
        });

        it(`if data was update`, async () => {
            db._rows = [{ 'a': 'abc', 'id': 2 }];
            await expect(db.update({ 'a': 'update', 'id': 2 })).resolves.toStrictEqual({ 'a': 'update', 'id': 2 });
        });
    });
    describe(`trunc()`, () => {
        it(`delete all data`, async () => {
            await expect(db.truncate()).resolves.toBeTruthy();
        });
     });
    describe('getRows()', () => {
        it(`should display rows`, async() => {
            await expect(db.getRows()).resolves.toStrictEqual([]);
        });
    });
});