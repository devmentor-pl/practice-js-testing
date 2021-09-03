import DB from './DB';

describe('check ID number', () => {
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