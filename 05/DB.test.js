import DB from './DB';

describe('.insert', () => {
    it('Should check if new row contain added data', ()=> {
        expect.assertions(1);
        const db = new DB();  
        return db.insert({a: 1, b: 2})
            .then(result => expect(result).toStrictEqual({"a": 1, "b": 2, "id": 1}));
    });

    it('Should check if new row was added', () => {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then (() => db.insert({a: 1, b: 2}))
            .then(() => db.getRows())
            .then ((rows) => expect(rows.length).toBe(2));
    });

    it('Should reject when id is not a number', ()=> {
        expect.assertions(1);
        const db = new DB()
        return db.insert({a: 1, b: 2, id: "a11a"})      
            .catch(err => {expect(err).toBe('ID can be only number!');
        });          
    });

    it('Should reject when id is duplicated', ()=> {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then (() => db.insert({a: 2, b: 3, id: 1}))
            .catch(err => {
            expect(err).toBe('ID can\'t be duplicated!');
        });          
    });
});

describe('.select', () => {
    it('Should check if the appropriate row was selected', () => {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})  
            .then (() => db.insert({a: 3, b: 4}))
            .then(() => db.select(2))
            .then(() => db.getRows())
            .then(row => expect(row[1].id).toBe(2))
    });
});


describe('.remove', () => {
    it('Should check if the row with chosed id was removed', ()=> {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
            .then(() => db.remove(2))
            .then(result => expect(result).toBe('Item was remove!'))
        });         
});


describe('.update', () => {
    it('Should change data in the row selected by id', ()=> {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then(() => db.update({a:5, b:7, id: 1}))
            .then(() => db.getRows())
            .then(row => expect(row[0].a).toBe(5))
        });
});

describe('.update', () => {
    it('2Should change data in the row selected by id', async ()=> {
        expect.assertions(1);
        const db = new DB();
        await db.insert({a: 1, b: 2})
        const result = await db.update({a: 3, b: 8, id: 1});
        const rows = await db.getRows()
        expect(rows[0].a).toBe(3);
        });
});


describe('.getRows', () => {
    it('Should chceck if the amount of rows is equal to added', () => {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
            .then(() => db.getRows())
            .then(rows => {expect(rows.length).toBe(2);
        });
    });
});

describe('.truncate', () => {
    it('Should chceck if all the data in the DB was removed', () => {
        expect.assertions(1);
        const db = new DB();
        return db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
            .then(() => db.truncate())
            .then(() => db.getRows())
            .then(rows => {expect(rows.length).toBe(0);
        })
    })
})
