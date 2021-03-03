import DB from './DB';

describe('insert', () => {
    // scenario
    it('return data when ID is a number', () => {
        // given
        const db = new DB();
        // when
        const data = { a: 1, b: 2 };
        const promise = db.insert(data);
        //then
        return promise.then(result => {
            expect(result).toBe(data);
        });
    });


    it('return ID can be only number', () => {
        // given
        const db = new DB();
        // when
        const data = { id: 'tak', a: 1, b: 2 };
        const promise = db.insert(data);
        //then
        return promise.catch(err => {
            expect(err).toBe('ID can be only number!');
        });
    });


    it('return ID can\'t be duplicated', () => {
        // given
        const db = new DB();
        // when
        const data1 = { id: 1, a: 1, b: 2 };
        const data2 = { id: 1, a: 11, b: 22 };
        db.insert(data1);
        const promise = db.insert(data2);
        //then
        return promise.catch(err => {
            expect(err).toBe('ID can\'t be duplicated!');
        });
    });
});



describe('select', () => {
    // scenario
    it('return row when ID is a found', () => {
        // given
        const db = new DB();
        // when
        const data = { a: 1, b: 2 };
        db.insert(data);

        const id = 1;
        const promise = db.select(id);
        //then
        return promise.then(result => {
            expect(result).toBe(data);
        });
    });


    it('return ID not found', () => {
        // given
        const db = new DB();
        // when
        db._rows = [{ abc: 22 }];

        const id = 1;
        const promise = db.select(id);

        //then
        return promise.catch(err => {
            expect(err).toBe('ID not found');
        });
    });
});



describe('remove', () => {
    // scenario
    it('return item was remove', () => {
        // given
        const db = new DB();
        // when
        const data = { a: 3 };
        db.insert(data);

        const id = 1;
        const promise = db.remove(id);
        //then
        return promise.then(result => {
            expect(result).toBe('Item was remove!');
        });
    });


    it('return item not exist', () => {
        // given
        const db = new DB();
        // when
        const data = { a: 3 };
        db.insert(data);

        const id = 3;
        const promise = db.remove(id);
        //then
        return promise.catch(err => {
            expect(err).toBe('Item not exist!');
        });
    });
});



describe('get', () => {
    // scenario
    it('return tables rows', () => {
        // given
        const db = new DB();
        // when
        const row1 = { x: 11 };
        const row2 = { y: 12 };

        db.insert(row1);
        db.insert(row2);

        const promise = db.getRows();
        //then
        return promise.then(result => {
            expect(result).toBe(db._rows);
        });
    });
});


