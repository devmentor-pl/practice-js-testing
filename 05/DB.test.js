import DB from './DB';

describe('DB -> insert', () => {
    it('return data when ID === number', () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1}
        const promise = db.insert(data);

        return promise.then(res => {
            expect(res).toBe(data);
        });
    });

    it('return that ID can not be duplicated', async () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1};
        const newData = {id: 1};

        await db.insert(data);
        
        const promise = db.insert(newData);

        return promise.catch(err => {

            expect(err).toBe('ID can\'t be duplicated!');

        });
    });
});

describe('DB -> select', () => {
    it('return ID if is not found', async () => {
        const db = new DB();

        const data = {id: 1};
        await db.insert(data);
        const dataId = 1;
        const promise = db.select(dataId);

        return promise.catch(err => {
            expect(err).toBe('ID not found')
        });
    });
});

describe('DB -> remove', () => {
    it('return when ID is found', async () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1};
        await db.insert(data);
        const id = 1;
        const promise = db.remove(id);

        return promise.then(res => {
            expect(res).toBe('Item was remove!')
        });
    });

    it('return when ID is not found', async () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1, b: 2};
        await db.insert(data);
        const id = 4;
        const promise = db.remove(id);

        return promise.catch(err => {
            expect(err).toBe('Item not exist!')
        });
    });
}); 