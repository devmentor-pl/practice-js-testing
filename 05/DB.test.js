import DB from './DB';

describe('.insert', () => {
    it('Should check if new row contain added data', ()=> {
        const db = new DB()     
        db.insert({a: 1, b: 2})
            .then (() => expect(result).toStrictEqual({"a": 1, "b": 2, "id": 1}));
    });

    it('Should check if new row was added', () => {
        //expect.assertions(1);
        //w tym teście, jeżeli użyję expect.assertions(1) dostaję informację: Expected one assertion to be called but received zero assertion calls.
        //jeżeli test jest bez tej linii to przechodzi z kolei zawsze (niezależnie od tego jaką wartość wpiszę w .toBe())
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then (() => db.insert({a: 1, b: 2}))
            .then(() => db.getRows())
            .then ((rows) => expect(rows.length).toBe(7));
    });

    it('Should reject when id is not a number', ()=> {
        expect.assertions(1);
        const db = new DB()
            db.insert({a: 1, b: 2, id: "a11a"})            
            .catch(err => {expect(err.message).toBe('ID can be only number!');
        });          
    });

    it('Should reject when id is duplicated', ()=> {
        const db = new DB();
            db.insert({a: 1, b: 2})
            .catch(err => {
            expect(err.message).toBe('ID can\'t be duplicated!');
        });          
    });
});

/*describe('.select', () => {

});*/


describe('.remove', () => {
    it('Row should be removed when it contains given id', ()=> {
        //expect.assertions(1);
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
            .then(() => db.remove(12))
            .then(() => expect(result).toBe('Item was remove!'));
        });         
});


describe('.update', () => {
    it('Should change id when the id is updated', ()=> {
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then(() => db.update({id: 3}))
            .then(()=> expect(result).toContain('id = 7'));
        });
});


describe('.getRows', () => {
    it('Should chceck if the amount of rows is equal to added', () => {
        expect.assertions(1);
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
            .then(() => db.getRows())
            .then(rows => {expect(rows.length).toBe(7);
        });
    });
});






