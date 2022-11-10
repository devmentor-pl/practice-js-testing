import DB from './DB';

describe('DB', () => {
    describe('insert', () => {
        it('should add data when it has no id ', async () => {
            const subject = new DB;
            const data = {a: 12, b: 13};
            const promise = subject.insert(data);

            await expect(promise).resolves.toBe(data);
        });
    
        
        it('should reject to add data when it\'s id is not a type of number', async () => {
            const subject = new DB;
            const data = {a: 3, b: 4, id: 's'}
            const promise = subject.insert(data)

            await expect(promise).rejects.toMatch('ID can be only number!');

        });

        it('should rejectto add data when it\'s id is duplicated', async ()  => {
            const subject = new DB;
            const data = {a: 3, b: 4, id: 2}
            await subject.insert(data)
            
            const promise = subject.insert(data);
            await expect(promise).rejects.toMatch('ID can\'t be duplicated!');
            
        });
    })
    describe('remove', () => {
        it('should remove data when it exists', async () => {
            const subject = new DB;
            const data = {a: 2, b: 3, id:1};
            const id = 1;             
            await subject.insert(data);
            
            const promise = subject.remove(id);
            
            await expect(promise).resolves.toBe('Item was remove!');
        })

        it('should reject to remove data when data doesn\'t exist', async () => {
            const subject = new DB;
            const data = {a: 2, b: 3, id:1};
            const id = 2;             
            await subject.insert(data);
            
            const promise = subject.remove(id);
            
            await expect(promise).rejects.toMatch('Item not exist!');    
        })
    
    })
    describe('update', () => {
        it('should resolve when data id matches new provided data', async () => {
            const subject = new DB;
            const data = {a: 2, b: 3, id:1};
            const newData = {a:4, b: 11, id:1}
            await subject.insert(data);
            const promise = subject.update(newData);

            await expect(promise).resolves.toBe(newData);

        })
        it('should reject when provided data has no id', async () => {
            const subject = new DB;
            const data = {a: 2, b: 3, id:1};
            const newData = {a:4, b: 11}
            await subject.insert(data);
            const promise = subject.update(newData);

            await expect(promise).rejects.toBe('ID have to be set!');

        })
        it('should reject when provided data has no match id', async () => {
            const subject = new DB;
            const data = {a: 2, b: 3, id:1};
            const newData = {a:4, b: 11, id: 2}
            await subject.insert(data);
            const promise = subject.update(newData);

            await expect(promise).rejects.toBe('ID not found!');

        })
    })
    describe('getRows', () => {
        it('should resolves when function called', async () => {
            const subject = new DB;
            const promise = subject.getRows();

            await expect(promise).resolves.toBe(subject._rows);
        })
    })
})