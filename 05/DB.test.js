import DB from './DB';

describe('DB', () => {
    describe('insert(data)', () => {
        it('Should reject when ID is not a number', () => {          
            expect.assertions(1);
            const db = new DB();
            const data = { id:  'x' };
            return db.insert(data).catch(err => {
                expect(err).toBe('ID can be only number!');
            });
        });

        it('Should reject when ID is duplicated', 
            async () => {          
                const db = new DB();
                const newData = { id: 7 };
                await db.insert({id : 7})

                return db.insert(newData).catch(err => {
                    expect(err).toBe('ID can\'t be duplicated!');
                });
        });

        it('Should resolve when added data correct', 
            async () => {
                const db = new DB();
                const data = {id : 1}
                const result = await db.insert(data);
                expect(result).toBe(data);
            
        })

        it('Should set correct id if not given',
            async () => {
                const db = new DB();                
                await db.insert({id : 1});                
                await db.insert({id : 3});
                
                const newRow = {a : 1}
                const result = await db.insert(newRow);

                expect(result.id).toBe(4);
        })
    });

    describe('select(id)', () => {
        it('Should reject when ID is not found', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});                
                
                return db.select(3).catch(err => {
                    expect(err).toBe('ID not found');
                });                
        });

        it('Should resolve when ID is found', 
            async () => {          
                expect.assertions(1);
                const db = new DB();                
                await db.insert({id : 1});
                await db.insert({id : 2});
                await db.insert({id : 3});
                
                const selectedId = 2;
                const result = await db.select(selectedId);                
                expect(result.id).toBe(selectedId);
        
        });
        
    });
        
    describe('remove(id)', () => {
        it('Should resolve when item existed and was removed', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});                
                               
                return db.remove(2).then(result => {
                    expect(result).toBe('Item was remove!');
                });                
        });

        it('Should reject when item not existed', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});                
                               
                return db.remove(4).catch(err => {
                    expect(err).toBe('Item not exist!');
                });                
        });
        
    });

    describe('update(data)', () => {
        it('Should reject when new data has no id', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});
                const data = {a : 1, b : 2};
                               
                return db.update(data).catch(err => {
                    expect(err).toBe('ID have to be set!');
                });                
        });

        it('Should reject when id not found', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});
                const data = {id: 3, a : 'test'};
                               
                return db.update(data).catch(err => {
                    expect(err).toBe('ID not found!');
                });                
        });
        
        it('Should resolve when data updated', 
            async () => {          
                expect.assertions(1);
                const db = new DB();
                await db.insert({id : 1});
                await db.insert({id : 2});
                const data = {id: 2, a : 'test'};
                               
                return db.update(data).then(result => {
                    expect(result).toBe(data);
                });                
        });

    });

    describe('truncate', () => {
        it('Should resolve when database was cleared', 
            async () => {          
                const db = new DB();
                await db.insert({id : 1});                                
                return db.truncate().then(result => {
                    expect(result).toBe(true);
                });                
        });
        
    });

    describe('getRows()', () => {
        it('Should resolve when return database', 
            async () => {          
            const db = new DB();            
            const rows = [{ id: 1 }, { id: 2 }];            

            await db.insert(rows[0]);
            await db.insert(rows[1]);
                        
            return db.getRows().then( result => {
                expect(result).toEqual(rows);
            })
            
        });
        
    });
})