import DB from './DB';

describe('data', () => {
    it('if data.id is 1', () => {
        const db = new DB();
        /*return db.insert({a: 3, b: 4})
        .then((resolve) => {
            expect(resolve).toBe(1)
            
        }) */
        return expect(db.insert({a: 3, b: 4})).resolves.toStrictEqual({a: 3, b: 4, id: 1})
        
    })
    it('if data.id is a number', () => {
        const db = new DB();
        
        //return expect(db.insert({a: 3, b: 4, id: "id"})).resolves.toBe({"a": 3, "b": 4, "id": "id"})


        return expect(db.insert({a: 3, b: 4, id: "id"})).rejects.toBe('ID can be only number!')
    }) 
})