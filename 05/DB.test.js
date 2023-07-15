import DB from './DB';

describe('DB', () => {
    describe('insert method', () => {
        it('insert {a: 1, b: 2} obj to _rows', async () => {
            const db = new DB()

            const result = await db.insert({ a: 1, b: 2 })

            expect(result).toStrictEqual({ a: 1, b: 2, id: 1 })
        })

        it('show error when id is not a number', () => {
            const db = new DB()
            const promise = db.insert({ id: '4' })

            return expect(promise).rejects.toMatch('ID can be only number!')
        })

        it('show error when id already exists', () => {
            expect.assertions(1);

            const db = new DB()
            const promise = db.insert({ id: 4 })
                .then(() => db.insert({ id: 4 }))

            return promise.catch((err) => {
                expect(err).toBe('ID can\'t be duplicated!')
            })
        })
    })
    describe('select method', () => {
        it('select item when id=3 is passed', () => {
            const db = new DB()

            const obj = { a: 1, b: 2, id: 3 }

            const promise = db.insert({ ...obj })
                .then(() => db.select(3))

            return promise.then(result => {
                expect(result).toStrictEqual({ ...obj })
            })
        })

        it('show error when select id=4 and rows is empty', () => {
            expect.assertions(1)

            const db = new DB()

            const promise = db.select(4)

            return promise.catch(err => {

                expect(err).toBe('ID not found')
            })
        })
    })

    describe('remove method', () => {
        it('remove item with id=2', () => {
            const db = new DB()

            const promise = db.insert({ a: 1, b: 2, id: 2 })
                .then(() => db.remove(2))

            return promise.then(result => {
                expect(result).toStrictEqual('Item was remove!')
            })
        })

        it('show error when remove id=2 and rows is empty', () => {
            expect.assertions(1)

            const db = new DB()

            const promise = db.remove(2)

            return promise.catch(err => expect(err).toBe('Item not exist!'))
        })
    })

    describe('update method', () => {
        test('show error when data.id is not passed', () => {
            expect.assertions(1)

            const db = new DB()

            const promise = db.update({ a: 3, c: '32' })

            return promise.catch(err => expect(err).toBe('ID have to be set!'))
        })

        test('update existed item: {a: 1, b: 2, id: 2}', async () => {
            const db = new DB()

            const result = await db.insert({ a: 1, b: 2, id: 2 })
                .then(() => db.update({ a: 1, b: 2, c: 4, id: 2 }))

            expect(result.c).toBe(4)
        })

        test('show error when id=3 and no such item in rows', async () => {
            const db = new DB()

            try {
                return await db.update({ a: 2, id: 3 })
            }

            catch (err) {
                return expect(err).toBe('ID not found!')
            }
        })
    })

    describe('truncate method', () => {
        test('remove items from rows. In this case: {a: 3, id: 1}', () => {
            const db = new DB()

            const promise = db.insert({ a: 3, id: 1 })
                .then(() => db.truncate())
                .then(() => db.getRows())
                .then(rows => rows.length)

            return expect(promise).resolves.toBe(0)
        })
    })

    describe('getRows method', () => {
        test('return rows: [{a: 3, id: 1}, {a: 3, b:4, id: 2}]', () => {
            const db = new DB()

            const promise = db.insert({ a: 3, id: 1 })
                .then(() => db.insert({ a: 3, b: 4, id: 2 }))
                .then(() => db.getRows())

            return expect(promise).resolves.toStrictEqual([{ a: 3, id: 1 }, { a: 3, b: 4, id: 2 }])
        })

        test('return rows: []', () => {
            const db = new DB()

            const promise = db.getRows()

            return promise.then((result) => expect(result).toStrictEqual([]))
        })
    })
})
