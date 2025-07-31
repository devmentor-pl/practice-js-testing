import DB from './DB';

describe('insert method', () => {
    test('return data when ID is provided', async () => {
        expect.assertions(1);
        let db = new DB();
        let id = 5;
        let promise = db.insert({id:id});
        return promise.then(result => {
            expect(result.id).toBe(id);
        })
    });


    test('Should reject when data is provided and is not a number', async () => {
        expect.assertions(1);
        let db = new DB();
        let promise = db.insert({ id: 'alga' });
        return promise.catch(err => {
            expect(err).toBe('ID can be only number!');
        })
    });

    test('Should reject when data is provided and is duplicated', async() => {
        expect.assertions(1);
        let db = new DB();
        let promise = db.insert({id: 6});
        return promise.catch(err => {
            expect(err).toBe('ID can\'t be duplicated!');
        })
    });

});

describe('select method', () => {

    test('return data when ID is found', async () => {
        expect.assertions(1);
        let db = new DB();
        let id = 6;
        let promise = db.select(id);
        return promise.then(result => {
            expect(result.id).toBe(id);
        })
    });


    test('Should reject when ID is not found', async () => {
        expect.assertions(1);
        let db = new DB();
        let promise = db.select();
        return promise.catch(err => {
            expect(err).toBe('ID not found');
        })
    });
});

describe('remove method', () => { 

    test('Should reject when lengthBeforeFilter === lengthAfterFilter', async() => {
        expect.assertions(1);
        let db = new DB();
        let promise = db.remove();
        return promise.catch(err => {
            expect(err).toBe('Item not exist!');
        })
    });

    test('Should resolve when item was remove', async() => {
        expect.assertions(1);
        let db = new DB();
        let id = 6;
        let promise = db.remove(id);
        return promise.then(result => {
            expect(result).toBe('Item was remove!');
        })
    });

    
})

describe('update method', () => {

    test('Should reject when ID was not set', async() => {
        expect.assertions(1);
        let db = new DB();
        let id;
        let promise = db.update({id:id});
        return promise.catch(err => {
            expect(err).toBe('ID have to be set!');
        })
    });

    test('Return data when data is provided and item.id is the same as data.id', async () => {
        expect.assertions(1);
        let db = new DB();
        let id = 6;
        let promise = db.update({ id: id });
        return promise.then(item => {
            expect(item.id).toBe(id);
        })
    });

    test('Return reject when data was provided and ID was not found', async() => {
        expect.assertions(1);
        let db = new DB();
        let number = 3;
        let promise = db.update({id:number});
        return promise.catch(err => {
            expect(err).toBe('ID not found!');
        })

    })

    test('return item when data is provided and item.id is not the same as data.id', async () => {
        expect.assertions(1);
        let db = new DB();
        let promise = db.update();
        return promise.catch(item => {
            expect(item).toBe(item);
        })
    });



    test('Return reject if data was not updated', async() => {
        expect.assertions(1);
        let db = new DB();
        let number = 3;
        let promise = db.update({id:number});
        return promise.catch(err => {
            expect(err).toBe('ID not found!!');
        })
    })

})

test('Return true from truncate method', async() => {
    expect.assertions(1);
        let db = new DB();
        let promise = db.truncate();
        return promise.then(result => {
            expect(result).toBe(true);
        })
});

test('Return rows from getRows method', async() => {
    expect.assertions(1);
        let db = new DB();
        let promise = db.getRows();
        return promise.then(result => {
            expect(result).toBe(db._rows);
        })
});