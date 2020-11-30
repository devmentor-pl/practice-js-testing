import DB from './DB';


describe('insert method', () => {
    it('should return data and id when id is not provided', async () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const promise = await db.insert({prop1: val1, prop2: val2})
 
        expect(promise.prop1).toBe(val1) 
        expect(promise.prop2).toBe(val2) 
        expect(promise.id).toBeGreaterThan(0)
    })

    it('should return data when id is provided', async () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1
        const promise = await db.insert({prop1: val1, prop2: val2, id: id})

        expect(promise.prop1).toBe(val1) 
        expect(promise.prop2).toBe(val2) 
        expect(promise.id).toBe(id)
    })

    it('should return "ID can be only number!" when id is not a number', async () => {
        expect.assertions(1)
        const db = new DB()

        try {
            await db.insert({id: '1', a: 1, b: 2})
        } catch (e) {
            expect(e).toBe('ID can be only number!')
        }
    })

    it('should return "ID can\'t be duplicated!" when id is not unique', async () => {
        expect.assertions(1)
        const db = new DB()

        await db.insert({id: 1, a: 1, b: 2})
        try {
            await db.insert({id: 1, a: 1, b: 2})
        } catch (e) {
            expect(e).toBe('ID can\'t be duplicated!')
        }
    })
})

describe('select method', () => {
    it('should return data when id is found', async () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1

        await db.insert({prop1: val1, prop2: val2, id: id})
        const promise = await db.select(id)

        expect(promise.id).toBe(id)
        expect(promise.prop1).toBe(val1)
        expect(promise.prop2).toBe(val2)
    })

    it('should return "ID not found" when id is not found and db is empty', async () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111

        try {
            await db.select(fakeId)
        } catch (e) {
            expect(e).toBe('ID not found')
        }
    })

    it('should return "ID not found" when id is not found and db has some data', async () => {
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1
        const fakeId = 111

        await db.insert({prop1: val1, prop2: val2, id: id})
        try {
            await db.select(fakeId)
        } catch (e) {
            expect(e).toBe('ID not found')
        }
    })
})

describe('remove method', () => {

    it('should return "Item was remove!" when id is found', async () => {
        expect.assertions(1)
        const db = new DB()
        const id = 1
        
        await db.insert({id: id, a: 1, b: 2})
        const promise = await db.remove(id)
        
        expect(promise).toBe('Item was remove!')

    })

    it('should return "Item not exist!" when id is not found and bd has data', async () => {
        expect.assertions(1)
        const db = new DB()
        const id = 1
        const fakeId = 111

        await db.insert({id: id, a: 1, b: 2})
        try {
            await db.remove(fakeId)
        } catch (e) {
            expect(e).toBe('Item not exist!')
        }
    })

    it('should return "Item not exist!" when id is not found and db is empty', async () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111

        await expect (db.remove(fakeId)).rejects.toBe('Item not exist!')
    })

})

describe('update method', () => {

    it('should return "ID have to be set!" when id is not provided', async () => {
        expect.assertions(1)
        const db = new DB()

        await expect (db.update({})).rejects.toBe('ID have to be set!')
    })

    it('should return "ID not found!" when id was not found and db is empty', async () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111

        await expect (db.update({id: fakeId})).rejects.toBe('ID not found!')
    })

    it('should return "ID not found!" when id was not found and db has data', async () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111

        await db.insert({id: 1, a: 1, b: 2})
        await expect(db.update({id: fakeId})).rejects.toBe('ID not found!')
    })

    it('should return data when id was found', async () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val1upd = 11
        const val2 = 2
        const val2upd = 22 
        const id = 1

        await db.insert({id: id, a: val1, b: val2})
        const promise = await db.update({id: id, a: val1upd, b: val2upd})

        expect(promise.id).toBe(id)
        expect(promise.a).toBe(val1upd)
        expect(promise.b).toBe(val2upd)
    })
})

it('truncate method should return true upon execution', async () => {
    expect.assertions(1)
    const db = new DB()

    await expect(db.truncate()).resolves.toBe(true)
})

it('getRows method should return rows list upon execution', async () => {
    expect.assertions(1)
    const db = new DB()

    await expect(db.getRows()).resolves.toBe(db._rows)
})
/*describe('insert method', () => {
    it('should return data and id when id is not provided', () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const promise = db.insert({prop1: val1, prop2: val2})

        return promise.then(result => { 
            expect(result.prop1).toBe(val1) 
            expect(result.prop2).toBe(val2) 
            expect(result.id).toBeGreaterThan(0)
        })
    })

    it('should return data when id is provided', () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1
        const promise = db.insert({prop1: val1, prop2: val2, id: id})

        return promise.then(result => { 
            expect(result.prop1).toBe(val1) 
            expect(result.prop2).toBe(val2) 
            expect(result.id).toBe(id)
        })
    })

    it('should return "ID can be only number!" when id is not a number', () => {
        expect.assertions(1)
        const db = new DB()
        const promise = db.insert({id: '1', a: 1, b: 2})

        return promise.catch(result => { expect(result).toBe('ID can be only number!') })
    })

    it('should return "ID can\'t be duplicated!" when id is not unique', () => {
        expect.assertions(1)
        const db = new DB()

        return db.insert({id: 1, a: 1, b: 2})
            .then(() => {
                        return db.insert({id: 1, a: 1, b: 2})
                            .catch(result => expect(result).toBe('ID can\'t be duplicated!'))
        })
    })

})

describe('select method', () => {
    it('should return data when id is found', () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1
        let promise = db.insert({prop1: val1, prop2: val2, id: id})
                    .then(() => promise = db.select(id))

        return db.insert({id: id, prop1: val1 , prop2: val2})
            .then(() => {
                        return db.select(id)
                            .then(result => { 
                                expect(result.id).toBe(id)
                                expect(result.prop1).toBe(val1)
                                expect(result.prop2).toBe(val2)
                            })
        })
    })

    it('should return "ID not found" when id is not found and db is empty', () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111
        const promise = db.select(fakeId)

        return promise.catch(result => { expect(result).toBe('ID not found') })
    })

    it('should return "ID not found" when id is not found and db has some data', () => {
        const db = new DB()
        const val1 = 1
        const val2 = 2
        const id = 1
        const fakeId = 111
        let promise = db.insert({prop1: val1, prop2: val2, id: id})
                    .then(() => promise = db.select(fakeId))

        return promise.catch(result => { expect(result).toBe('ID not found') })
    })

})

describe('remove method', () => {

    it('should return "Item was remove!" when id is found', () => {
        expect.assertions(1)
        const db = new DB()
        const id = 1
        
        return db.insert({id: id, a: 1, b: 2})
            .then(() => {
                        return db.remove(id)
                            .then(result => expect(result).toBe('Item was remove!'))
        })
    })

    it('should return "Item not exist!" when id is not found and bd has data', () => {
        expect.assertions(1)
        const db = new DB()
        const id = 1
        const fakeId = 111

        return db.insert({id: id, a: 1, b: 2})
            .then(() => {
                    return db.remove(fakeId)
                        .catch(result => expect(result).toBe('Item not exist!'))
        })
    })

    it('should return "Item not exist!" when id is not found and db is empty', () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111
        const promise = db.remove(fakeId)

        return promise.catch(result => { expect(result).toBe('Item not exist!') })
    })

})

describe('update method', () => {

    it('should return "ID have to be set!" when id is not provided', () => {
        expect.assertions(1)
        const db = new DB()
        const promise = db.update({})

        return promise.catch(result => { expect(result).toBe('ID have to be set!') })
    })

    it('should return "ID not found!" when id was not found and db is empty', () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111
        const promise = db.update({id: fakeId})

        return promise.catch(result => { expect(result).toBe('ID not found!') })
    })

    it('should return "ID not found!" when id was not found and db has data', () => {
        expect.assertions(1)
        const db = new DB()
        const fakeId = 111

        return db.insert({id: 1, a: 1, b: 2})
            .then(() => {
                return db.update({id: fakeId})
                    .catch(result => expect(result).toBe('ID not found!'))
        })
    })

    it('should return data when id was found', () => {
        expect.assertions(3)
        const db = new DB()
        const val1 = 1
        const val1upd = 11
        const val2 = 2
        const val2upd = 22 
        const id = 1

        return db.insert({id: id, a: val1, b: val2})
            .then(() => {
                return db.update({id: id, a: val1upd, b: val2upd})
                    .then(result => {
                        expect(result.id).toBe(id)
                        expect(result.a).toBe(val1upd)
                        expect(result.b).toBe(val2upd)
                    })
        })
    })
})

it('truncate method should return true upon execution', () => {
    expect.assertions(1)
    const db = new DB()
    const promise = db.truncate()

    return promise.then(result => { expect(result).toBe(true) })
})

it('getRows method should return rows list upon execution', () => {
    expect.assertions(1)
    const db = new DB()
    const promise = db.getRows()

    return promise.then(result => { expect(result).toBe(db._rows) })
})*/