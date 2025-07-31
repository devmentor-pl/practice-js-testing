import DB from './DB';

describe(`DB`, () => {
    describe('insert()', () => {
        it(`if function invoked without argument`, () => {
            const db = new DB();
            expect(() => { db.insert() }).toThrow('this method should contains one argument');
        });

        it(`if data.id is not a number`, async () => {
            const db = new DB();
            await expect(db.insert({ 'id': 'a' })).rejects.toBe('ID can be only number!');
        });

        it(`if id will duplicated`, async () => {
            const db = new DB();
            const fakeData = { 'a': 'abc', 'id': 2 };
            db._rows.push(fakeData);

            await expect(db.insert({ 'b': 'def', 'id': 2 })).rejects.toBe('ID can\'t be duplicated!');
        });

        it(`id doesn't exist`, async () => {
            const db = new DB();
            await expect(db.insert({ 'a': 'abc' })).resolves.toStrictEqual({ 'a': 'abc', 'id': 1 })
        });
    });
    describe('select()', () => {
        it(`select method doesn't has argument`, () => {
            const db = new DB();
            return expect(db.select()).rejects.toMatch('Id has to be a number');
        });
        it(`id is not a number`, () => {
            const db = new DB();
            return expect(db.select('a')).rejects.toMatch('Id has to be a number');
        });


        it(`id not found`, () => {
            const db = new DB();
            db.insert({ 'a': 'abc', 'id': 2 });
            return expect(db.select(1)).rejects.toMatch('ID not found');
        });

        it(`id was successful`, async () => {
            const db = new DB();
            await db.insert({ 'a': 'abc', 'id': 6 });
            return expect(db.select(6)).resolves.toStrictEqual({
                "a": "abc",
                "id": 6
            })
        });
    });
    describe('remove()', () => {
        it(`select method doesn't has argument`, () => {
            const db = new DB();
            return expect(db.remove()).rejects.toMatch('this method should contains one argument');
        });

        it(`id is not a number`, () => {
            const db = new DB();
            return expect(db.remove({id: 'a'})).rejects.toMatch('Id has to be a number');
        });


        it(`item remove`, async () => {
            const db = new DB();
            const data = await db.insert({id: 4 });
            await expect(db.remove(data.id)).resolves.toBe('Item was remove!');
        });

        it(`item not exist`, () => {
            const db = new DB();
            db.insert({ 'a': 'abc', 'id': 2 }, { 'b': 'def', 'id': 5 });
            return expect(db.remove(4)).rejects.toMatch('Item not exist!');
        });
    });
    describe('update()', () => {
        it(`if function invoked without argument`, () => {
            const db = new DB();
            expect(() => { db.update() }).toThrow();
        });

        it(`id doesn't exist`, () => {
            const db = new DB();
            return expect(db.update({ 'a': 'abc' })).rejects.toMatch('ID have to be set!');
        });

        it(`if id not found`, async () => {
            const db = new DB();
            await db.insert({ 'a': 'abc', 'id': 3 }, { 'b': 'def', 'id': 5 })
            await expect(db.update({ 'a': 'abc', 'id': 2 })).rejects.toBe('ID not found!');
        });

        it(`if data was update`, async () => {
            const db = new DB();
            await db.insert({ 'a': 'abc', 'id': 2 });
            await expect(db.update({ 'a': 'update', 'id': 2 })).resolves.toStrictEqual({ 'a': 'update', 'id': 2 });
        });
    });
    describe(`trunc()`, () => {
        it(`delete all data`, async () => {
            const db = new DB();
            await expect(db.truncate()).resolves.toBeTruthy();
        });
     });
    describe('getRows()', () => {
        it(`should display rows`, async() => {
            const db = new DB();
            await expect(db.getRows()).resolves.toStrictEqual([]);
        });
    });
});