import DB from './DB';

describe('check insert metod', () => {
    it('should add id to inserted data', async () => {
        const db = new DB()
        const data = await db.insert({ a: 1, b: 2 })

        expect(data.id).toBeDefined()

    })

    it('should reject if id is not a number', async () => {
        expect.assertions(1)
        const db = new DB()
        try {
            await db.insert({ a: 1, b: 2, id: 'not a number' })
        } catch (error) {
            expect(error).toBe("ID can be only number!")
        }

    })

    it('should reject if id is duplicated', async () => {
        expect.assertions(1)
        const db = new DB()
        try {
            await db.insert({ a: 1, b: 2, id: 1 })
            await db.insert({ a: 3, b: 4, id: 1 })
        } catch (error) {
            expect(error).toBe("ID can\'t be duplicated!")
        }

    })

    it('should insert correct data', async () => {
        expect.assertions(1)
        const db = new DB()

        const data = { a: 1, b: 2, id: 1 }
        const dataInserted = await db.insert(data)

        expect(dataInserted).toEqual(data)
    })

})

describe('check select metod', () => {
    it('should reject if id is not found', async () => {
        expect.assertions(1)
        const db = new DB()
        try {
            await db.select(1)
        } catch (error) {
            expect(error).toBe("ID not found")
        }
    })

    it('should resolve when id is correct', async () => {
        const db = new DB()
        const id = 1

        await db.insert({ a: 1, b: 2, id: id })
        const checkId = await db.select(id)

        expect(checkId.id).toEqual(id)

    })

})

describe('check remove metod', () => {
    it('should resolve when item was found and removed',async () => {
        const db = new DB()
        await db.insert({ a: 1, b: 2, id: 1 })
        
        const removedItem = await db.remove(1)
       
        expect(removedItem).toEqual('Item was remove!')
        
    })

    it('should reject, when item does not exist',async () => {
        const db = new DB()
        try {
            await db.remove(1)
        } catch (error) {
            expect(error).toBe('Item not exist!')
        }  
        
    })

})

describe('check update metod', () => {
   
    it('should reject if id is not set', async () => {
        expect.assertions(1)
        const db = new DB()

        try {
            await db.update({ a: 1, b: 2 })
        } catch (error) {
            expect(error).toEqual('ID have to be set!')
        }
    })
    it('should resolve then data is updated correctly', async () => {
        const db = new DB()
        const newData = { a: 3, b: 4, id: 1 }

        await db.insert({ a: 1, b: 2, id: 1 })

        const updatedData = await db.update(newData)
        expect(updatedData).toEqual(newData)
    })

    it('should reject when id is not found', async () => {
        const db = new DB()
        try {
            await db.insert({ a: 1, b: 2, id: 1 })
            await db.update({ a: 1, b: 2, id: 2 })
        } catch (error) {
            expect(error).toBe('ID not found!')
        }
        
    })
})



