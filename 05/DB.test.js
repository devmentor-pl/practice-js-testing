import DB from './DB';

describe('DB', () => {
    describe('insert', () => {
        it('should insert numbers to database', async () => {
            const db = new DB();
            await db.insert({ id: 1, a: 1, b: 2 })
            const rows = await db.getRows()
            expect(rows.length).toBe(1)
        })
        it('should not insert data if data.id is not number', async () => {
            try {
                const db = new DB()
                await db.insert({ id: 'not a number', a: 1, b: 2 })
            } catch (error) {
                expect(error).toBe('ID can be only number!')
            }
        })

        it('should not insert data if data.id is already exists', async () => {
            try {
                const db = new DB()
                await db.insert({ id: 1, a: 1, b: 2 })
                await db.insert({ id: 1, a: 3, b: 4 })
            } catch (error) {
                expect(error).toBe('ID can\'t be duplicated!')
            }
        })
        it('should create new id if id is not declared', async () => {
            const db = new DB();
            await db.insert({ a: 1, b: 2 })
            const rows = await db.getRows()
            const newId = rows[0].id
            expect(newId).toBe(1)
        })
        it('should create next id if id is not declared', async () => {
            const db = new DB();
            await db.insert({ a: 1, b: 2 })
                .then(() => db.insert({ a: 3, b: 4 }))
            const rows = await db.getRows()
            const newId = rows[1].id
            expect(newId).toBe(2)
        })
    })
    describe('select', () => {
        it('should not catch if select row', async () => {
            try {
                const db = new DB();
                await db.insert({ a: 1, b: 2 })
                await db.select(1)
            } catch (error) {
            }
        })
        it('should reject if id not found', async () => {
            try {
                const db = new DB();
                await db.insert({ a: 1, b: 2 })
                await db.select(3)
            } catch (error) {
                expect(error).toBe('ID not found')
            }
        })
    })
    describe('remove', () => {
        it('should remove elements from database', async () => {
            const db = new DB();
            await db.insert({ id: 1, a: 1, b: 2 })
            const initialRows = await db.getRows()
            expect(initialRows.length).toBe(1)
            await db.remove(1)
            const rows = await db.getRows()
            expect(rows.length).toBe(0)
        })

        it('should reject if id not found', async () => {
            const db = new DB();
            await db.insert({ id: 1, a: 1, b: 2 })
            const initialRows = await db.getRows()
            expect(initialRows.length).toBe(1)
            try {
                await db.remove(2)
                const rows = await db.getRows()
            } catch (error) {
                expect(error).toBe('Item not exist!')
            }
        })
    })
    describe('update', () => {
        it('should update elements', async () => {
            const db = new DB()
            await db.insert({ id: 1, a: 1, b: 2 })
            const initialRows = await db.getRows()
            const newData = { id: 1, a: 2, b: 3 }
            await db.update(newData)
            const rows = await db.getRows()
            expect(rows.length).toBe(1)
            expect(rows[0]).toBe(newData)
        })


        it('should reject if id not found', async () => {
            const db = new DB();
            await db.insert({ id: 1, a: 1, b: 2 })
            try {
                await db.update({ id: 2, a: 1, b: 2 })
                const rows = await db.getRows()
            } catch (error) {
                expect(error).toBe('ID not found!')
            }
        })
    })
    describe('truncate', () => {
        it('should clear database', async () => {
            const db = new DB()
            await db.insert({ id: 1, a: 1, b: 2 })
            const initialRows = await db.getRows()
            expect(initialRows.length).toBe(1)
            await db.truncate()
            const rows = await db.getRows()
            expect(rows.length).toBe(0)
        })
    })
    describe('getRows', () => {
        it('should return rows', async () => {
            const db = new DB()
            const data = { id: 1, a: 1, b: 2 }
            await db.insert(data)
            const rows = await db.getRows()
            expect(rows[0]).toBe(data)
        })
    })

})