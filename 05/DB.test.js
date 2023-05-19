import DB from './DB';

describe ('Database', ()=> {
    describe ('.insert()', () => {
        it('should return inserted object with correct id', ()=> {
            const database = new DB();
            const promise = database.insert({a:3, b:2});
            return promise
                .then(()=> database.getRows())
                .then(rows => {
                    expect(rows.length).toBe(1)
                }) 
        })
    
        it('should throw proper error message if id is not a number', () => {
            expect.assertions(1);
            const database = new DB();
            const wrongIdObject = { id: 'abc' }
            return database.insert(wrongIdObject)
              .catch(error => {
                expect(error).toBe('ID can be only number!');
              });
        });
    
        it('should throw proper error message if if inserted id already exists in this._rows', () => {
            const database = new DB();
            const duplicatedIdObject = {id:1}
            database._rows.push(duplicatedIdObject);
            return expect(database.insert({id:1}))
                .rejects.toBe('ID can\'t be duplicated!');
                    
    
        })
    })
    
    describe('.select()', () => {
        it('should return row of preset obj with id same as in parameter',
            async () => {
                const database = new DB();
                const presetObj = {id:1};
                database._rows.push(presetObj);
    
                const resultObj =  await database.select(1);
                expect(resultObj.id).toBe(1);
        });
    
        it('should throw error if no id found', ()=> {
            const database = new DB();
            const presetObj = {id:1};
            database._rows.push(presetObj);
    
            return expect(database.select(2))
                .rejects.toBe('ID not found')
        })
    })
    
    describe('.remove()', ()=>{
        it('should return proper message when item of id=1 was removed', 
            async () => {
                const database = new DB();
                const presetObj = {id:1};
                database._rows.push(presetObj);
    
                const successfulRemoveMessage = await database.remove(1)
                expect(successfulRemoveMessage).toBe('Item was remove!')
        });
    
        it('should throw error if object of id=1 doesnt exists', ()=> {
                const database = new DB();
                const presetObj = {id:1};
                database._rows.push(presetObj);
    
                return expect(database.remove(2))
                    .rejects.toBe('Item not exist!')
        })
    })
    
    describe('.update()', ()=>{
        it('should throw error if no id specified', ()=> {
                expect.assertions(1);
                const database = new DB();
                const promise = database.update({a:1})
                return promise
                    .catch(error => {
                        expect(error).toBe('ID have to be set!');
                    });
        })
    
        it('should return updated property value of update data object',
        async () => {
            const database = new DB();
            const presetObj = {id:1, a:1};
            const updateObj = {id:1, a:2};
            database._rows.push(presetObj);
    
            const updatedObjOfId = await database.update(updateObj)
            expect(updatedObjOfId.a).toBe(2)
        });
    
        it('should throw error if object of id=2 doesnt exists', ()=> {
            const database = new DB();
            const presetObj = {id:1};
            const updateObj = {id:2};
            database._rows.push(presetObj);
    
            return expect(database.update(updateObj))
                .rejects.toBe('ID not found!')
    })
    
    })
})