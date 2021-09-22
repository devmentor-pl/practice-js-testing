import DB from './DB';

describe('data', () => {
    it('if data.id is 1', () => {
        const db = new DB();
        
        return expect(db.insert({a: 3, b: 4})).resolves.toStrictEqual({a: 3, b: 4, id: 1})
        
    })
    it('if data.id is a number', () => {
        const db = new DB();
        
        return expect(db.insert({a: 3, b: 4, id: "id"})).rejects.toBe('ID can be only number!')
    })
    it('rejects if data is not defined', () => {
        const db = new DB();

        return expect(db.insert()).rejects.toStrictEqual('data is not defined!')
        
    })
    it('if selected id exists', () => {
        const db = new DB();

        return db.insert({a: 3, b: 4, id: 1})
        .then(() => expect(db.select(1)).resolves.toStrictEqual({a: 3, b: 4, id: 1}))

    })

    

    it('rejects if data.id is 1', () => {
        expect.assertions(1);

        const db = new DB();

        return db.insert({id: 2})

        .then(() => expect(db.select(1)).rejects.toBe('ID not found'))

    })
    it('resolves if passed id was removed', async () => {
        const db = new DB();
        
        await db.insert({a: 3, b: 4, id: 1})

        await expect(db.remove(1)).resolves.toStrictEqual('Item was remove!')

    })
    it('rejects if passed isnt equal to data.id', async () => {
        const db = new DB();
        
        await db.insert({a: 3, b: 4, id: 1})

        await expect(db.remove(2)).rejects.toStrictEqual('Item not exist!')

    })
    it('resolves returns the same object as passed in update function', async () => {
        const db = new DB();
        const firstObject = {a: 3, b: 4, id: 1};
        const secondObject = {a: 5, b: 5, id: 1};
        await db.insert(firstObject)

        await expect(db.update(secondObject)).resolves.toStrictEqual(secondObject)

    })
    it('rejects when the id of the passed object in update function is different', async () => {
        const db = new DB();
        const firstObject = {a: 3, b: 4, id: 1};
        const secondObject = {a: 5, b: 5, id: 2};
        await db.insert(firstObject)

        await expect(db.update(secondObject)).rejects.toStrictEqual('ID not found!')

    })
    it('function resolves all objects inserted', async () => {
        const db = new DB();
        const firstObject = {a: 3, b: 4, id: 1};
        const secondObject = {a: 5, b: 5, id: 2};
        await db.insert(firstObject)
        await db.insert(secondObject)
        await expect(db.getRows()).resolves.toStrictEqual([firstObject, secondObject])

    })
    it('expect this._rows to be an empty array', async () => {
        const db = new DB();

        await db.truncate() 

        
        await expect(db._rows).toStrictEqual([])

    })
})
