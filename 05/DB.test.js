import DB from './DB';


describe('DB -> insert', () => {
    it('return data when ID equals number', () => {
        expect.assertions(1);

        const db = new DB();

        const data = {id: 1}
        const promise = db.insert(data);

        return promise.then(res => {
            expect(res).toBe(data);
        });
    });

    it('reject if ID is duplicated', async () => {
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

it('return msg item was remove', async () => {
    expect.assertions(1);
    const db = new DB();
    const data = { a: 1 };
    await db.insert(data);
   
    const id = 1;
    const promise = db.remove(id);

    return promise.then(res => {
        expect(res).toBe('Item was remove!');
    });
});

describe('DB -> update', () => {
    it('reject when id is not set', async() => {
        expect.assertions(1);

        const db = new DB();

        const data = { a: 1 };
        await db.insert(data);

        const dataId = 1;
        const promise = db.update(dataId);

        return promise.catch(err => {
            expect(err).toBe('ID have to be set!');
        });
    });


    it('return updated data if id equals number', async () => {
        expect.assertions(1);
        
        const db = new DB();
        const data = {id: 1};
        const newData = {id: 1};
        await db.insert(data);
        const promise = db.update(newData);
        return promise.then(res => {
            expect(res).toBe(newData);
        });
    });
});


