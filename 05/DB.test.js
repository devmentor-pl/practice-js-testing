import DB from './DB';

describe('.insert()', () => {
    it('reject when id is not a number', async () => {
        const db = new DB
        try {
            await db.insert({id: 'b', name: 'Diego Rodrigues'})
        } catch(err) {
            expect(err).toBe('ID can be only number!')
        }
    })})
