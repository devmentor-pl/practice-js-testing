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
    it('if ID is found', () => {
        const db = new DB();
        const data = {id: 4};
        return expect(db.select(data)).rejects.toBe('ID not found');
    })
})

describe('test for remove method', () => {
    it('rejects when ID not exist', async () => {
        const db = new DB();
        db.insert({id: 4})
        db.insert({id: 5})
        const id = 6;
        const promise = db.remove(id);
        return promise.catch(err => {
            expect(err).toBe('Item not exist!')
        })
    })
    it('resolves when ID exists', async () => {
        const db = new DB();
        const id = {id: 4};
        await db.insert(id);
        expect(db.remove(id.id)).resolves.toBe('Item was removed!')
    })
})

describe('test for update method', () => {
    it('if ID is set', () => {
        const db = new DB();
        const data = {name: 'abc'};
        const promise = db.update(data);
        return promise.catch(err => {
            expect(err).toBe('ID have to be set!')
        })
    })
})

 