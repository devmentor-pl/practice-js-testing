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

    it('should inform if ID is not a number', () => {
        expect.assertions(1);
        const db = new DB();
        db._rows = [{
            name: "name",
            id: 3
        }]
        const data = {
            id: 3
        }
        const promise = db.insert(data);
        return promise.catch(err => {
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
    it('should return row when give an ID', () => {
        expect.assertions(1);
        const db = new DB();
        db._rows = [{ // czy powinnam przekazac id poprzez db.insert???
            name: "name",
            id: 3
        }, {
            name: "name",
            id: 5
        }]
        const id = 5;
        const promise = db.select(id)
        return promise.then(result => {
            expect(result).toBe(db._rows[1]) //?? Nie miałam innego pomyslu :(
        })
    })
    it('should inform when ID is not found', () => {
        expect.assertions(1);
        const db = new DB();
        db._rows = [{
            name: "name",
            id: 3
        }]
        const id = 1;
        const promise = db.select(id);
        return promise.catch(err => {
            expect(err).toBe('ID not found')
        })
    })
})
describe('remove', () => {
    it('should return when ID is found', async () => {
        const db = new DB();
        db._rows = [{
            name: "name",
            id: 3
        }, {
            name: "name",
            id: 5
        }]
        const id = 5;
        const result = await db.remove(id)
        expect(result).toBe('Item was remove!')
    })

    it('should inform when ID not exist', () => {
        expect.assertions(1);
        const db = new DB();
        db._rows = [{
            name: "name",
            id: 3
        }, {
            name: "name",
            id: 5
        }]
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
        expect.assertions(1);
        const db = new DB();
        const data = {
            name: "name",
            id: 3
        }
        await db.insert(data);
        const newData = {
            name: "neName",
            id: 3
        }
        const promise = await db.update(newData);
        if (db._rows.some(item => item.id === newData.id)) {
            return expect(promise).toBe(newData)
        }
    })

    it('should return when ID is found', () => {
        expect.assertions(1);
        const db = new DB();
        const data = {
            name: "name",
            id: 3
        }
        db.insert(data);
        db.remove(3);
        const newData = {
            name: "newName",
            id: 3
        }
        const promise = db.update(newData);
        if (!db._rows.some(item => item.id === newData.id)) {
            return promise.catch(err => {
                expect(err).toBe('ID not found!')
            })
        }
    })
})