import DB from './DB';

describe('class DB', () => {

    it('is database created', () => {
        const db = new DB();
        return expect(db).toBeInstanceOf(DB);
    });

    it('is database object', () => {
        const db = new DB();
        return expect(db).toBeInstanceOf(Object);
    });

    it('is array declared', () => {
        const db = new DB();
        return expect(db._rows).toBeTruthy();
    });

    it('is array object', () => {
        const db = new DB();
        return expect(db._rows).toBeInstanceOf(Object);
    });

    it('is array empty', () => {
        const db = new DB();
        return expect(db._rows.length).toBe(0);
      });

});

describe('data', () => {

    it('if data.id is not exist', () => {
        const db = new DB();
        const data1 = {id: 2, a: 1, b: 1};
        db.insert(data1);

        const promise = new Promise(function(resolve, reject) {
            if (data1.id !== null) {
                resolve(true);
            } else {
                reject('data.id is not exist!');
            }
        });
    });

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
        const data2 = {id: 2, a: 2, b: 2};
        db.insert(data1);
        db.insert(data2);

        const promise = new Promise(function(resolve, reject) {
            if (data1.id !== data2.id) {
                resolve(true);
            } else {
                reject('data.id is duplicated!');
            }
        });
    });

});

describe('other methods', () => {

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
