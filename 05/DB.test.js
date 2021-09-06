import DB from './DB';

describe('insert', () => {
    it('should inform if ID is not a number', () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            id: '3'
        }
        const promise = db.insert(data);
        return promise.catch(err => {
            expect(err).toBe('ID can be only number!')
        })
    })

    it('should inform when ID try to be duplicated', async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({
            name: "name",
            id: 3
        })
        const data = {
            id: 3
        };
        return db.insert(data).catch(err => {
            expect(err).toBe('ID can\'t be duplicated!')
        })
    })

    it('should return ID when it is a number', () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            id: 3
        }
        const promise = db.insert(data);
        return promise.then(result => {
            expect(result).toBe(data)
        })
    })

})

describe('select', () => {
    it('should return row when give an ID', async () => {
        expect.assertions(1);
        const db = new DB();
        const data1 = {
            name: "name",
            id: 3
        }
        await db.insert(data1);
        const data2 = {
            name: "name",
            id: 5
        }
        await db.insert(data2)
        const id = 5;
        const result = await db.select(id)
        expect(result).toBe(data2)
    })

    it('should inform when ID is not found', () => {
        expect.assertions(1);
        const db = new DB();
        const data1 = {
            name: "name",
            id: 3
        }
        db.insert(data1)
        const id = 1;
        const promise = db.select(id);
        return promise.catch(err => {
            expect(err).toBe('ID not found')
        })
    })
})
describe('remove', () => {
    it('should info whenItem was removed and return length of array', async () => {
        expect.assertions(2);
        const db = new DB();
        await db.insert({
            name: "name",
            id: 3
        })
        await db.insert({
            name: "name",
            id: 5
        })
        const id = 5;
        const result = await db.remove(id)
        expect(result).toBe('Item was remove!')
        return db.getRows().then(result => {
            expect(result.length).toBe(1)
        })
    })

    it('should inform when ID not exist', () => {
        expect.assertions(1);
        const db = new DB();
        db.insert({
            name: "name",
            id: 3
        })
        db.insert({
            name: "name",
            id: 5
        })
        const id = 7;
        const promise = db.remove(id);
        return promise.catch(err => {
            expect(err).toBe('Item not exist!')
        })
    })
})

describe('update', () => {
    it('should inform when ID have to be set', () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            name: 3
        }
        const promise = db.update(data);
        return promise.catch(err => {
            expect(err).toBe('ID have to be set!')
        })
    })

    it('should return when ID is found', async () => {
        expect.assertions(2);
        const db = new DB();
        const data = {
            name: "name",
            id: 3
        }
        await db.insert(data);
        const newData = {
            name: "newName",
            id: 3
        }
        const promise = await db.update(newData);
        expect(promise).toBe(newData)
        return db.select(3).then(result => {
            expect(result.name).toBe('newName')
        })
    })

    it('should return when ID is not found', async () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            name: "name",
            id: 3
        }
        const data2 = {
            name: "name",
            id: 5
        }
        await db.insert(data);
        await db.insert(data2);
        await db.remove(data.id);
        const newData = {
            name: "newName",
            id: 3
        }
        return db.update(newData).catch(err => {
            expect(err).toBe('ID not found!')
        })
    })
})