import DB from './DB';

describe('.instert()', () => {

    it('should return 1 if one item is inserted', async () => {
        const db = new DB()
        await db.insert({ id: 1, name: 'First Item' })
        const rows = await db.getRows()

        expect(rows.length).toBe(1)

    })

    it('should return error when data.id is not a number', async () => {
        expect.assertions(1)

        const db = new DB()
        try {
            await db.insert({ id: '1', name: 'First Item' })
        } catch (err) {
            expect(err).toBe('ID can be only number!')
        }
    })

    it('should return error when id is duplicated', async () => {
        expect.assertions(1)

        const db = new DB()
        try {
            await db.insert({ id: 1, name: 'First Item' })
            await db.insert({ id: 1, name: 'Second Item' })
        } catch (err) {
            expect(err).toBe('ID can\'t be duplicated!')
        }
    })

    it('should inserted data be correct', async () => {
        expect.assertions(1)

        const db = new DB()
        const data = { id: 1, name: 'First Item' }
        const insertedData = await db.insert(data)

        expect(insertedData).toEqual(data)

    })
})

describe('.select()', () => {

    it('should inserted data be correct', async () => {
        expect.assertions(1)

        const db = new DB()

        const id3 = { id: 3, name: 'Third Item' }

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert(id3)

        const rows = await db.getRows()

        expect(rows[2]).toEqual(id3)
    })

    it('should inserted data be correct', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        const rows = await db.getRows()

        expect(rows[2].id).toEqual(3)
    })

    it('should reject when searched id not exists ', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        try {
            await db.select(4)
        } catch (error) {
            expect(error).toBe('ID not found')
        }

    })
})

describe('.remove()', () => {

    it('should remove item by its id ', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        await db.remove(2)

        const rows = await db.getRows()
        const rowsLength = rows.length

        expect(rowsLength).toBe(2)

    })

    it('should reject when searched id not exists ', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        try {
            await db.remove(4)

        } catch (error) {
            expect(error).toBe('Item not exist!')
        }
    })

})

describe('.update()', () => {

    it('should reject when searched id not exists ', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        try {
            await db.update(4)

        } catch (error) {
            expect(error).toBe('ID have to be set!')
        }
    })

    it('updated item should have correct data ', async () => {
        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

    
            await db.update({ id: 2, name: 'Second Item - updated' })

            const rows = await db.getRows()

            expect(rows[1].name).toEqual('Second Item - updated')
        
    })


})

describe('.truncate()', () => {

    it('".truncate()" should clear rows after call ', async () => {

        expect.assertions(1)

        const db = new DB()

        await db.insert({ id: 1, name: 'First Item' })
        await db.insert({ id: 2, name: 'Second Item' })
        await db.insert({ id: 3, name: 'Third Item' })

        db.truncate()

        const rows = await db.getRows()

        expect(rows).toEqual([])

    })

})
