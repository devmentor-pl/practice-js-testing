import DB from './DB';

describe('insert', () => {
    it('reject when ID is not a number', () => {
        const db = new DB()
        const data = { id: 'abc' }

        const promise = db.insert(data)

        return promise.catch(result => {
            expect(result).toBe('ID can be only number!')
        })
    })
    it('reject when ID already exists', async () => {
        const db = new DB()
        const data = { id: 2 }
        const data2 = { id: 2 }
        try {
            await db.insert(data)
            await db.insert(data2)
        } catch (error) {
            expect(error).toBe('ID can\'t be duplicated!')
        }
    })
    it('insert row with id 4 when object id is set to 4', async () => {
        const db = new DB()
        const data = { id: 4 }

        const result = await db.insert(data)

        expect(result).toEqual(data)

    })

    it('set row id to 3 when inserted id set to 1 and 2 ', async () => {
        const db = new DB()
        const data = { id: 1 }
        const data2 = { id: 2 }
        const data3 = {}

        await db.insert(data)
        await db.insert(data2)
        const result = await db.insert(data3)

        expect(result.id).toBe(3)

    })

})

describe('select', () => {
    it('reject when row with id = 3 is not set', async () => {
        const db = new DB()
        const data = { id: 1 }
        const data2 = { id: 2 }
        try {
            await db.insert(data)
            await db.insert(data2)
            await db.select(3)

        } catch (error) {
            expect(error).toBe('ID not found')
        }
    })
    it('select row with id=15 when row with id set to 15 exist', async () => {
        const db = new DB()
        const data = { id: 1 }
        const data2 = { id: 15 }

        await db.insert(data)
        await db.insert(data2)
        const result = await db.select(15)

        expect(result).toEqual(data2)
    })
})

describe('remove', () => {
    it('reject when row with id = 5 is not set', async () => {
        const db = new DB()
        const data = { id: 5 }
        const data2 = { id: 4 }
        try {
            await db.insert(data)
            await db.insert(data2)
            await db.remove(3)

        } catch (error) {
            expect(error).toBe('Item not exist!')
        }
    })
    it('remove row with id=13 when row with id set to 13 exist', async () => {
        const db = new DB()
        const data = { id: 13 }
        const data2 = { id: 2 }

        await db.insert(data)
        await db.insert(data2)
        const result = await db.remove(13)

        expect(result).toBe('Item was removed!')
    })
})

describe('update', () => {
    it('reject when not passing id', async () => {
        const db = new DB()
        const data = { id: 7 }
        const data2 = { id: 8 }
        try {
            await db.insert(data)
            await db.insert(data2)
            await db.update({})

        } catch (error) {
            expect(error).toBe('ID have to be set!')
        }
    })

    it('update row with id=12 when row with id set to 13 exist', async () => {
        const db = new DB()
        const data = { id: 12 }
        const data2 = { id: 2 }
        const updatedData = { id: 12, name: 'Mateusz' }

        await db.insert(data)
        await db.insert(data2)
        const result = await db.update(updatedData)

        expect(result).toEqual(updatedData)
    })

    it('reject when row with id = 66 is not set', async () => {
        const db = new DB()
        const data = { id: 65 }
        const data2 = { id: 67 }
        const fakeData = { id: 66 }
        try {
            await db.insert(data)
            await db.insert(data2)
            await db.update(fakeData)

        } catch (error) {
            expect(error).toBe('ID not found!')
        }
    })

})

describe('truncate', () => {
    it('clear database rows', async () => {
        const db = new DB()
        const data = { id: 11 }
        const data2 = { id: 12 }

        await db.insert(data)
        await db.insert(data2)
        const result = await db.truncate()

        expect(result).toBe('Database is now clear')
    })


    it('reject when database is empty', async () => {
        const db = new DB()
        try {
            await db.truncate()

        } catch (error) {
            expect(error).toBe('Database is already empty!')
        }
    })



})

describe('get rows', () => {
    it('get rows when not empty', async () => {
        const db = new DB()
        const data = { id: 15, name: 'Mateusz' }
        const data2 = { id: 17, name: 'Ania' }
        const dataArray = [{ id: 15, name: 'Mateusz' }, { id: 17, name: 'Ania' }]

        await db.insert(data)
        await db.insert(data2)
        const result = await db.getRows()

        expect(result).toEqual(dataArray)
    })

    it('reject when rows empty', async () => {
        const db = new DB()
        try {
            await db.getRows()

        } catch (error) {
            expect(error).toBe('No rows in the database!')
        }
    })

})