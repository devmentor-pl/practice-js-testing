import DB from './DB';

describe('insert', () => {
    // scenario
    it('return data when ID is a number', () => {
        expect.assertions(1);

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
        expect.assertions(1);

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


    it('return ID can\'t be duplicated', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data1 = { id: 1, a: 1, b: 2 };
        const data2 = { id: 1, a: 11, b: 22 };
        await db.insert(data1);
        const promise = db.insert(data2);
        //then
        return promise.catch(err => {
            expect(err).toBe('ID can\'t be duplicated!');
        });
    });
});



describe('select', () => {
    // scenario
    it('return row when ID is a found', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data = { a: 1, b: 2 };
        await db.insert(data);

        const id = 1;
        const promise = db.select(id);
        //then
        return promise.then(result => {
            expect(result).toBe(data);
        });
    });


    it('return ID not found', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data = { a: 1 };
        await db.insert(data);

        const id = 3;
        const promise = db.select(id);

        //then
        return promise.catch(err => {
            expect(err).toBe('ID not found');
        });
    });
});



describe('remove', () => {
    // scenario
    it('return item was remove', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data = { a: 3 };
        await db.insert(data);

        const id = 1;
        const promise = db.remove(id);
        //then
        return promise.then(result => {
            expect(result).toBe('Item was remove!');
        });
    });


    it('return item not exist', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data = { a: 3 };
        await db.insert(data);

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
    it('return tables rows', async () => {
        expect.assertions(1);

        // given
        const db = new DB();
        // when
        const data = { x: 12 };
        await db.insert(data);

        const promise = db.getRows();
        //then
        return promise.then(result => {
            expect(result).toBe(db._rows);
        });
    });
});


