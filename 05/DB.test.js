import DB from './DB';

describe('DB constructor', () => {
    it('creates array named \'_rows\'', () => {
        const subject = new DB();

        expect(subject._rows).toEqual([])
    })
    it('created array is empty', () => {
        const subject = new DB();

        expect(subject._rows.length).toBe(0);
    })
})

describe('insert', () => {
    it('rejects when id is not a number', async () => {
        expect.assertions(1);
        const subject = new DB();
        const id = 'NaN'
        const object = {id};

        try {
            await subject.insert(object);
        } catch(err) {
            expect(err).toEqual('ID can be only number!');
        }
    })
    it('rejects when id is duplicated', async () => {
        expect.assertions(1);
        const subject = new DB();
        const id = 4;
        const object = {id};
        const duplicatedIdObject = {id};

        try {
            await subject.insert(object)
            await subject.insert(duplicatedIdObject);
        }
        catch(err) {
            expect(err).toEqual('ID can\'t be duplicated!');
        }
    })
    it('sets user id for highest id value + 1', async () => {
        const subject = new DB();
        subject._rows.push({id: 0}, {id: 2});
        const newObject = await subject.insert({notId: 'not id parameter'});

        expect(newObject.id).toBe(3);
    })
    it('sets user id for highest id value + 1 regardless the order', async () => {
        const subject = new DB();
        subject._rows.push({id: 2}, {id: 0});
        const newObject = await subject.insert({notId: 'not id parameter'});

        expect(newObject.id).toBe(3);
    })
    //może można było rzucać wyjątkiem jeśli są ujemne, ale w sumie nie znam założeń
    it('sets user id for value 1 if all ids are negative', async () => {
        const subject = new DB();
        subject._rows.push({id: -1}, {id: -2});
        const newObject = await subject.insert({notId: 'not id parameter'});

        expect(newObject.id).toBe(1);
    })
    it('inserts new user into DB._rows', async () => {
        const subject = new DB();
        const startLength = subject._rows.length;
        const user = {parameter: 'value'};
        await subject.insert(user);
        const endLength = subject._rows.length;

        expect(endLength).toBeGreaterThan(startLength);
    })
})

describe('select', () => {
    it('rejects when id is not found', async () => {
        expect.assertions(1);
        const subject = new DB();

        try {
            await subject.select(1)
        } catch(err) {
            expect(err).toEqual('ID not found');
        }
    })
    it('returns existing user', async () => {
        expect.assertions(1);
        const subject = new DB();
        const user = {id: 1}
        
        await subject.insert(user)
            .then(() => subject.select(1))
            .then(resp => expect(resp).toEqual(user));
    })
})
describe('remove', () => {
    it('throws when id doesn\'t exist', async () => {
        expect.assertions(1);
        const subject = new DB();
        const fakeId = 1;
        try {
            await subject.remove(fakeId);
        } catch(err) {
            expect(err).toEqual('Item doesn\'t exist!');
        }
    })
    it('returns message when user removed', async () => {
        const subject = new DB();
        const user = {id: 1};
        await subject.insert(user);
        const message = await subject.remove(1);
        expect(message).toEqual('Item was removed!');
    })
})
describe('update', () => {
    it('rejects when id is not set', async () => {
        expect.assertions(1);
        const subject = new DB();
        const data = {noIdProperty: 'noIdvalue'};
        try {
            await subject.update(data);
        } catch(err) {
            expect(err).toEqual('ID has to be set!');
        }
    })
    it('rejects when id not found', async () => {
        expect.assertions(1);
        const subject = new DB();
        const object = {id: 1, someProperty: 'someValue'};
        await expect(subject.update(object)).rejects.toBe('ID not found!');
    })
    it('updates object if data is correct', async () => {
        expect.assertions(1);
        const subject = new DB();
        const object = {id: 1, data: 'old data'};
        await subject.insert(object);
        object.data = 'new data';
        await subject.update(object);
        const resultObject = await subject.select(object.id);

        expect(resultObject.data).toBe('new data');
    })
})
describe('truncate', () => {
    it('clears a database', async () => {
        expect.assertions(1);
        const subject = new DB();
        await subject.insert({id:1});
        await subject.insert({prop: 'some value'});
        await subject.truncate();

        expect(subject._rows.length).toBe(0);
    })
})
describe('getRows', () => {
    it('gsefse', async () => {
        expect.assertions(2);
        const subject = new DB();
        let rows = await subject.getRows();

        expect(rows.length).toBe(0);

        const object = {id: 1};
        await subject.insert(object);
        rows = await subject.getRows();
        expect(rows[0]).toEqual(object);
    })
})