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
        db._rows = [{
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
    it('should return when ID is found', () => {
        expect.assertions(1);
        const db = new DB();
        db._rows = [{
            name: "name",
            id: 3
        }, {
            name: "name",
            id: 5
        }]
        const id = 5;
        const promise = db.remove(id)
        return promise.then(result => {
            expect(result).toBe('Item was remove!') 
        })
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
