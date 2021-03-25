import DB from './DB';

describe('insert method', () => {
    test('return data when ID is provided', async() => {
        expect.assertions(1);
        let db = new DB();
        let id = 5;
        let promise =  db.insert();
        return promise.then( result => {
            expect(result).toBe(id);
        })
    })
})