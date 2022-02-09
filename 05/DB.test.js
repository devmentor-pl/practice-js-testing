import DB from './DB';

describe('insert method', () => {
    it('if ID is not a number', async () => {
        const db = new DB();
        try {
            await db.insert({id:'b'});
        }
        catch (error){
            expect(error).toBe('ID can be only number!');
        }
    });

    it('if ID is already in a database', async () => {
        expect.assertions(1);
        const id1 = {id:1};
        const id2 = {id:1};
        const db = new DB(id1);

        await db.insert(id1);
        const promise = db.insert(id2);
        return promise.catch(error => { expect(error).toBe('ID can\'t be duplicated!')});
    })

});