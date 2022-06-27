import DB from './DB';

describe('.insert()', () => {
    it('reject when id is not a number', async () => {
        const db = new DB
        try {
            await db.insert({id: 'b', name: 'Diego Rodrigues'})
        } catch(err) {
            expect(err).toBe('ID can be only number!')
        }
    })

    it('reject when id already exists', async () => {
        const db = new DB
        try {
            await db.insert({id: 1, name: 'Diego Rodrigues'})
            await db.insert({id: 1, name: 'Margarida Santos'})
        } catch(err) {
            expect(err).toBe('ID can\'t be duplicated!')
        }
    })

    it('return 1 when one item is inserted', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        const rows = await db.getRows()

        expect(rows.length).toBe(1)
    })

    it('inserted data is correct', async () => {
        const db = new DB
        const data = {id: 1, name: 'Diego Rodrigues'}
        const insertedData = await db.insert(data)

        expect(insertedData).toEqual(data)
    })
})

describe('.select()', () => {
    it('reject when id is not found', async () => {
        const db = new DB
        try {
            await db.select(2)
        } catch(err) {
            expect(err).toBe('ID not found')
        }
    })

    it('resolve when id is found', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        const idIsFound = await db.select(1)

        expect(idIsFound).toEqual({id: 1, name: 'Diego Rodrigues'})
    })
})

describe('.remove()', () => {
    it('reject when item does not exist', async () => {
        const db = new DB
        try {
            await db.remove(3)
        } catch(err) {
            expect(err).toBe('Item not exist!')
        }
    })

    it('resolve when item is removed', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        await db.remove(1)
            .then(data => {
                expect(data).toBe('Item was remove!')
            })
    })
})

describe('.update()', () => {
    it('reject when id is not given', async () => {
        const db = new DB
        try {
            await db.update({name: 'Carla Flores'})
        } catch(err) {
            expect(err).toBe('ID have to be set!')
        }
    })

    it('reject when id is not found', async () => {
        const db = new DB
        try {
            await db.insert({id: 1, name: 'Diego Rodrigues'})
            await db.update({id: 2, name: 'Carla Flores'})
        } catch(err) {
            expect(err).toBe('ID not found!')
        }
    })

    it('resolve when data is updated', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        const idIsUpdated = await db.update({id: 1, name: 'Carla Flores'})

        expect(idIsUpdated).toEqual({id: 1, name: 'Carla Flores'})
    })
})

describe('.truncate()', () => {
    it('return 0 when truncate()', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        await db.insert({id: 2, name: 'Carla Flores'})
        await db.truncate()
        const rows = await db.getRows()

        expect(rows.length).toBe(0)
    })
})

describe('.getRows()', () => {
    it('return the number of items in db', async () => {
        const db = new DB
        await db.insert({id: 1, name: 'Diego Rodrigues'})
        await db.insert({id: 2, name: 'Carla Flores'})        
        const rows = await db.getRows()

        expect(rows.length).toBe(2)
    })
})