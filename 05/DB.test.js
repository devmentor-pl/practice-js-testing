import DB from './DB';

describe('class DB', () => {

    it('is database created', () => {
        const db = new DB();
        return expect(db).toBeInstanceOf(DB);
    });

    it('is array empty', () => {
        const db = new DB();
        return expect(db._rows.length).toBe(0);
    });

});

describe('data', () => {

    it('rejects when id is duplicated', async () => {
        const db = new DB;
        await db.insert({id: 1, a: 'a', b: 'b'});
        await db.insert({id: 2, a: 'a', b: 'b'});
        await db.insert({id: 3, a: 'a', b: 'b'});
        await db.insert({id: 4, a: 'a', b: 'b'});
        await db.insert({id: 5, a: 'a', b: 'b'});
        await db.insert({id: 6, a: 'a', b: 'b'});
        await expect(db.insert({id: 5, a: 'a', b: 'b'})).rejects.toMatch('ID can\'t be duplicated!');
    })

    it('how many elements exist', async () => {
        const db = new DB;
        let numberOfElements = db._rows.length;

        await db.insert({id: 1, a: 'a', b: 'b'});
        await db.insert({id: 2, a: 'a', b: 'b'});
        await db.insert({id: 3, a: 'a', b: 'b'});
        await db.insert({id: 4, a: 'a', b: 'b'});
        await db.insert({id: 5, a: 'a', b: 'b'});
        await db.insert({id: 6, a: 'a', b: 'b'});

        await db.remove(db._rows.length);
        await db.remove(db._rows.length);

        numberOfElements = db._rows.length;
        await expect(db._rows.length).toBe(numberOfElements);
    })

    it('if data.id is 1', () => {
        const db = new DB();
        const data = {a: 3, b: 4};
        return expect(db.insert(data)).resolves.toStrictEqual({"a": 3, "b": 4, "id": 1});
    });

    it('if data.id is a number', () => {
        const db = new DB();
        const data = {a: 3, b: 4, id: 4};
        return expect(db.insert(data)).resolves.toStrictEqual({"a": 3, "b": 4, "id": 4});
    });

    it('if data.id is duplicated', () => {
        const db = new DB();
        const data1 = {id: 1, a: 1, b: 1};
        const data2 = {id: 1, a: 2, b: 2};
        db.insert(data1);
        db.insert(data2);

        const promise = new Promise(function(resolve, reject) {
            if (data1.id === data2.id) {
                resolve(true);
            } else {
                reject('data.id is not duplicated!');
            }
        });
    });

});

describe('other methods', () => {

    it('truncate method exist', async () => {
        const db = new DB;
        await db.insert({id: 1, a: 'a', b: 'b'});
        await db.insert({id: 2, a: 'a', b: 'b'});
        await db.insert({id: 3, a: 'a', b: 'b'});
        await db.insert({id: 4, a: 'a', b: 'b'});
        await db.insert({id: 5, a: 'a', b: 'b'});
        await db.insert({id: 6, a: 'a', b: 'b'});

        await expect(db.truncate()).resolves.toBe(true);
    })

    it('executed truncate method should return empty _rows', () => {
        expect.assertions(1);
        const db = new DB();

        return db.truncate().then(expect(db._rows.length).toBe(0));
    })

    it('executed truncate method should return empty _rows', async () => {
        const db = new DB;
        await db.insert({id: 1, a: 'a', b: 'b'});
        await db.insert({id: 2, a: 'a', b: 'b'});
        await db.insert({id: 3, a: 'a', b: 'b'});
        await db.insert({id: 4, a: 'a', b: 'b'});
        await db.insert({id: 5, a: 'a', b: 'b'});
        await db.insert({id: 6, a: 'a', b: 'b'});

        await db.truncate();
        await expect(db._rows.length).toBe(0);
    })

    it('executed truncate method should return empty _rows', () => {
        expect.assertions(1);
        const db = new DB();

        return db.truncate().then(expect(db._rows.length).toStrictEqual(0));
    })

    it('executed truncate method should return true', () => {
        expect.assertions(1);
        const db = new DB();

        return db.truncate().then(result => {expect(result).toBe(true)});
    })

    it('getRows method should return rows list', () => {
        expect.assertions(1);
        const db = new DB();
    
        return db.getRows().then(result => {expect(result).toBe(db._rows)})
    })

});

