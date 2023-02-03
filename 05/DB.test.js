import DB from './DB';

describe('test for insert method', () => {
    it('if ID is a number', () => {
        const db = new DB();
        const data = {
            id: 'abc'
        }
        const promise = db.insert(data);
        return promise.catch(err => {
            expect(err).toBe('ID can be only number!')
        })
    })
    it('if ID is not duplicated', async () => {
        const db = new DB();
        await db.insert({id: 8})
        return db.insert({id: 8}).catch(err => {
            expect(err).toBe('ID can\'t be duplicated!')
        })
    })
})

describe('test for select method', () => {
    it('if ID exists', () => {
        const db = new DB();
        const data = {id: 4};
        return expect(db.select(data)).rejects.toBe('ID not found');
    })
})