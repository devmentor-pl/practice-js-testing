//DZIAŁA
import DB from './DB';

describe('DB', () => {     
    let db;      
    beforeEach(() => {         
        db = new DB();     
    });      
    
    it('should insert data into the database', 
    async () => {         
        await db.insert({ a: 1, b: 2 });         
        const rows = await db.getRows();         
        expect(rows).toEqual([{ id: 1, a: 1, b: 2 }]);     
    });      
    
    it('should select data from the database by id', 
    async () => {         
        await db.insert({ a: 1, b: 2 });         
        const data = await db.select(1);         
        expect(data).toEqual({ id: 1, a: 1, b: 2 });     
    });      
    it('should remove data from the database by id', 
    async () => {         
        await db.insert({ a: 1, b: 2 });         
        await db.remove(1);         
        const rows = await db.getRows();         
        expect(rows).toEqual([]);     });      
        it('should update data in the database by id', 
        async () => {         
            await db.insert({ a: 1, b: 2 });         
            const updatedData = await db.update({ id: 1, a: 3, b: 4 });         
            expect(updatedData).toEqual({ id: 1, a: 3, b: 4 });     
        });      
        it('should truncate the database', async () => {         
            await db.insert({ a: 1, b: 2 });         
            await db.truncate();         
            const rows = await db.getRows();         
            expect(rows).toEqual([]);     
        });      
        it('should reject when selecting data with non-existent id', 
        async () => {         
            await expect(db.select(1)).rejects.toEqual('ID not found');     
        });      
        it('should reject when removing data with non-existent id', async () => {         
            await expect(db.remove(1)).rejects.toEqual('Item not exist!');     
        });      
        it('should reject when updating data with non-existent id', async () => {         
            await expect(db.update({ id: 1, a: 3, b: 4 })).rejects.toEqual('ID not found!');     
        });      
        it('should reject when updating data without setting id', async () => {         
            await expect(db.update({ a: 3, b: 4 })).rejects.toEqual('ID have to be set!');     
        });      
        it('should reject when inserting data with duplicate id', async () => {         
            await db.insert({ id: 1, a: 1, b: 2 });         
            await expect(db.insert({ id: 1, a: 3, b: 4 })).rejects.toEqual("ID can't be duplicated!");     
        });      
        it('should reject when inserting data with non-numeric id', async () => {         
            await expect(db.insert({ id: 'abc', a: 1, b: 2 })).rejects.toEqual('ID can be only number!');     
        }); 
    }); 
