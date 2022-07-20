import DB from './DB';

describe('.insert', () => {
    it('Row should contain id, when the method insert had been used', ()=> {
        const db = new DB();       
        const promise = db.insert({a: 1, b: 2});
        return promise.then(result => {
            expect(result).toStrictEqual({"a": 1, "b": 2, "id": 1});
        });  
    });
   
    
    it('Should reject when id is not a number', ()=> {
        const db = new DB();
        const promise = db.insert({a: 1, b: 2, id: "a1"});
        return promise.catch(err => {
            expect(err.message).toBe('ID can be only number!');
        });          
    });

    it('Should reject when id is duplicated', ()=> {
        const db = new DB();
        const promise = db.insert({a: 1, b: 2});
        return promise.catch(err => {
            expect(err.message).toBe('ID can\'t be duplicated!');
        });          
    });
});

/*describe('.select', () => {

});*/


describe('.remove', () => {
    it('Row should be removed when it contains given id', ()=> {
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
        const promise = db.remove(2);
        return promise.then(result => {
            expect(result).toBe('Item was remove!');
        });         
    });
});

describe('.update', () => {
    it('Should change id when the id is updated', ()=> {
        const db = new DB();
        db.insert({a: 1, b: 2});
        const promise = db.update({id: 3});
        return promise.then(result => {
            expect(result).toContain('id = 3');
        });
    });
});

describe('.getRows', () => {
    it('Should chceck if the amount of rows is equal to added', () => {
        const db = new DB();
        db.insert({a: 1, b: 2})
            .then(() => db.insert({a: 3, b: 4}))
        const promise = db.getRows();
        return promise.then(rows => {
            expect(rows.length).toBe(2);
        });
    });
});






