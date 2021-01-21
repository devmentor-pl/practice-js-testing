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
        const subject = new DB();
        const id = 4;
        const object = {id};
        const duplicatedIdObject = {id};

        try {
            await subject.insert(object)
                    .then(subject.insert(duplicatedIdObject));
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
        const endLength = await subject._rows.length;

        expect(endLength).toBeGreaterThan(startLength);
    })
})

describe('select', () => {
    it('rejects when id is not found', async () => {
        const subject = new DB();

        try {
            subject.select(1)
        } catch(err) {
            expect(err).toEqual('ID not found');
        }
    })
    it('returns existing user', async () => {
        const subject = new DB();
        const user = {id: 1}
        
        subject.insert(user)
            .then(subject.select(1))
            .then(resp => expect(resp).toEqual(user));
    })
})
describe('remove', () => {
    it('throws when id doesn\'t exist', async () => {
        const subject = new DB();
        const fakeId = 1;
        try {
            await subject.remove(fakeId);
        } catch(err) {
            // debugger;
            expect(err).toEqual('Item doesn\'t exist!');
        }
    })
    it('returns message when user removed', async () => {
        const subject = new DB();
        const user = {id: 1};
        await subject.insert(user);
        debugger;
        const message = await subject.remove(user);
        expect(message).toEqual('Item was removed!');
    })
})