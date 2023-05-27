import DB from './DB';

describe('Database', () => {
    describe('insert()', () => {
        it('Should resolve when item added to database', () => {
            const db = new DB()

            const newItem = {a: 1, b: 2}
            return expect(db.insert(newItem))
                .resolves.toBe(newItem)
        })

        it('Should return id: 1 when first item inserted', () =>{
            const db = new DB()

            return db.insert({a:1, b:2})
                .then(result => expect(result.id).toBe(1))
        })

        it('Should reject when id is not a number', () => {
            const db = new DB()

            const itemData = {id:'some string', a:1, b:2}

            return expect(db.insert(itemData))
                .rejects.toMatch('ID can be only number!')
        })

        it('Should reject when id is duplicated', () => {
            const db = new DB()

            const duplicatedID = {a:3, b:4, id:1}
            return db.insert({a:3, b:4, id:1})
                .then(() => {
                    expect(db.insert(duplicatedID))
                        .rejects.toMatch('ID can\'t be duplicated!')
                })
        })
    })

    describe('select()', () => {
        it('Should reject when id is not found', () => {
            const db = new DB()

            const wrongId = 3
            return db.insert({a:1, b:2, id: 1})
                .then(() => {
                    expect(db.select(wrongId))
                        .rejects.toMatch('ID not found')
                })
        })

        it('Should resolve when id is found', () => {
            const db = new DB()

            return db.insert({id: 2, a:1, b:2})
                .then(result => {
                    expect(db.select(2))
                    .resolves.toBe(result)
                })
        })
    })

    describe('remove()', () => {
        it('Should resolve when item is removed', () => {
            const db = new DB()

            const idToRemove = 1

            return db.insert({a: 1, b: 2, id:1})
                .then(() => {
                    expect(db.remove(idToRemove))
                        .resolves.toMatch('Item was remove!')
                })
        })

        it('Should reject when item does not exist', () => {
            const db = new DB()

            const wrongIdToRemove = 3
            return db.insert({a:1, b:2, id:1})
                .then(() => {
                    expect(db.remove(wrongIdToRemove))
                        .rejects.toMatch('Item not exist!')
                })
        })
    })

    describe('update()', () => {
        it('Should resolve when item to update is found', () => {
            const db = new DB()

            const newData = {a: 3, b: 4, id:2}
            return db.insert({a: 1, b: 2, id:2})
                .then(() => {
                    expect(db.update(newData))
                        .resolves.toEqual(newData)
                })
        })

        it('Should reject when item to update is not found', () => {
            const db = new DB()

            const notExistingId = 3
            return db.insert({a:3, b:4, id:2})
                .then(() => {
                    expect(db.update({a:3, b:4, id: notExistingId}))
                        .rejects.toMatch('ID not found!')
                })
        })

        it('Should reject when id to update is not provided', () => {
            const db = new DB()

            return db.insert({a: 1, b: 2, id: 1})
                .then(() => {
                    expect(db.update({a: 3, b:4}))
                        .rejects.toMatch('ID have to be set!')
                })
        })
    })

    describe('truncate()', () => {
        it('Should resolve when database is cleared', () => {
            const db = new DB()

            return db.insert({a:1, b:2, id:1})
                .then(db.insert({a:3, b:4, id:2}))
                .then(() => {
                    expect(db.truncate())
                        .resolves.toBeTruthy()
                })
        })
    })

    describe('getRows()', () => {
        it('Should return number of items saved in database', async () => {
            const db = new DB()

            await db.insert({a: 1, b: 2, id: 1})
            await db.insert({a: 3, b: 4, id: 2})

            const rows = await db.getRows()

            expect(rows.length).toBe(2)
        })
    })
})