import DB from './DB';

describe('Checking constructor', () => {
    it('Should return empty array when its created', async () => {
        // function getAllRows() {
        //     const newArray = new DB()
        //     newArray.getRows()
        // }
        // expect(getAllRows).toHaveLength(0)

        // const newArray = new DB()
        // const promise = newArray.getRows()
        // return promise.then(resp => {
        //     expect(resp).toHaveLength(0)
        // })

        const newArray = new DB()
        const resp = await newArray.getRows()
        expect(resp).toHaveLength(0)
    })
})

describe('Checking insert fun', () => {
    it('Should return object which is inserted data', async () => {
        const newArray = new DB()
        const resp = await newArray.insert({ a: 1, b: 2 })
        expect(resp).toMatchObject({ a: 1, b: 2 })
    })
    it('Should return array with one object from this._rows', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2 })
        const respRows = await newArray.getRows()
        expect(respRows).toMatchObject([{ a: 1, b: 2 }])
        //return expect(newArray.getRows()).resolves.toMatchObject([{ a: 1, b: 2 }])
    })
    it('Should stop function because of id is not a number', () => {
        const newArray = new DB()
        return expect(newArray.insert({ a: 1, b: 2, id: 'a' })).rejects.toMatch('ID can be only number!')
    })
    it('Should stop fun because of id can\'t be duplicated', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2, id: 1 })
        return expect(newArray.insert({ a: 1, b: 2, id: 1 })).rejects.toMatch('ID can\'t be duplicated!')
    })
})

describe('Checking select fun', () => {
    it('Should return row with selected id', async () => {
        const newArray = new DB()
        const addedObject = await newArray.insert({ a: 1, b: 2, id: 1 })
        return expect(newArray.select(1)).resolves.toBe(addedObject)
    })
    it('Should be rejected after ID not found', () => {
        const newArray = new DB()
        return expect(newArray.select(1)).rejects.toMatch('ID not found')
    })
})

describe('Checking remove fun', () => {
    it('Should remove an item', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2, id: 1 })
        return expect(newArray.remove(1)).resolves.toMatch('Item was remove!')
    })
    it('Should not find an item to remove', () => {
        const newArray = new DB()
        return expect(newArray.remove(1)).rejects.toMatch('Item not exist!')
    })
})

describe('Checking update fun', () => {
    it('Should reject when updating without any ID', () => {
        const newArray = new DB()
        return expect(newArray.update({ a: 1, b: 2 })).rejects.toMatch('ID have to be set!')
    })
    it('Should resolve when updating existing ID', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2, id: 1 })
        return expect(newArray.update({ a: 3, b: 4, id: 1 })).resolves.toMatchObject({ a: 3, b: 4, id: 1 })
    })
    it('Should reject when updating nonexisting ID', () => {
        const newArray = new DB()
        return expect(newArray.update({ a: 3, b: 4, id: 1 })).rejects.toMatch('ID not found!')
    })
})

describe('Checking truncate fun', () => {
    it('Should return true after removing row\'s contents', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2, id: 1 })
        await newArray.insert({ a: 1, b: 2, id: 2 })
        return expect(newArray.truncate()).resolves.toBe(true)
    })
    it('Should return empty rows after truncate', async () => {
        const newArray = new DB()
        await newArray.insert({ a: 1, b: 2, id: 1 })
        await newArray.insert({ a: 1, b: 2, id: 2 })
        await newArray.truncate()
        return expect(newArray.getRows()).resolves.toHaveLength(0)
    })
})