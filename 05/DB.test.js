import DB from './DB';

describe('insert method', () => {
    it('if ID is not a number', async () => {
        const db = new DB();
        try {
            await db.insert({id:'b'});
        }
        catch (e){
            expect(e).toBe('ID can be only number!');
        }
    });

});