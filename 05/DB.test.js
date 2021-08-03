import DB from './DB';

describe('Insert', () => {
    it('return data when ID is a number', () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1}
        const promise = db.insert(data);

        return promise.then(result => {
            expect(result).toBe(data);
        });
    });

    it('ID can not be duplicated', async () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1};
        const data2 = {id: 1};
        await db.insert(data);
        const promise = db.insert(data2);

        return promise.catch(err => {
            expect(err).toBe('ID can\'t be duplicated!');
        });
    });
});

describe('select', () => {
    it('return when ID is not found', async() => {
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

describe('remove', () => {
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

    it('return when ID is not found', async() => {
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