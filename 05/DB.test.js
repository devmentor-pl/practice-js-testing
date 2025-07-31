import DB from './DB';

describe('DB', () => {

    it('Should throw exception when id is not a number', () => {
        
        const db = new DB();
        const newData = {id: 'test'};

        return expect(db.insert(newData)).rejects.toBe('ID can be only number!');
    
    })

    it('Should throw exception when id is duplicated', async () => {
        
        const db = new DB();
        await db.insert({a: 1, id: 3});

        return expect(db.insert({b: 1, id: 3})).rejects.toBe('ID can\'t be duplicated!');
    
    })

    it('Should show proper element id', async () => {

        const db = new DB();
        const first = await db.insert({name: 'testowe1'});
        const second = await db.insert({name: 'testowe2'})

        // expect(first.id).toBe(1);
        expect(second.id).toBe(2);
    })

    it('Should show selected element id', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7})

        expect(first.id).toBe(5);
        expect(second.id).toBe(7);
    })

    it('Should return element with selected id', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7})

        const selectedID = await db.select(5)

        expect(selectedID).toStrictEqual({name: 'testowe1', id: 5});
    })

    it('Should throw exception when element with selected id doesnt exist', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7})

        return expect(db.select(1)).rejects.toBe('ID not found');
    })

    it('Should remove item with selected ID', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        // const itemToRemove = await db.remove(5);
        await expect(db.remove(5)).resolves.toBe('Item was remove!');
    })

    it('Should throw exception when item to remove doesnt exist', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        return expect(db.remove(3)).rejects.toBe('Item not exist!');
    })

    it('Should throw exception when element id to update is not set', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        return expect(db.update({name: 'test'})).rejects.toBe('ID have to be set!');
    })

    it('Should throw exception when element id to update doesnt exist', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        return expect(db.update({id: 6, name: 'test'})).rejects.toBe('ID not found!');
    })

    it('Should return updated element', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        await expect(db.update({id: 5, name: 'test'})).resolves.toStrictEqual({name: 'test', id: 5})
    })

    it('Should clear array and return true', async () => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        await expect(db.truncate()).resolves.toBe(true);
        expect(db._rows).toStrictEqual([]);
    })

    it('Should return array with all elements', async() => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});

        await expect(db.getRows()).resolves.toStrictEqual([{name: 'testowe1', id: 5}, {name: 'testowe2', id: 7}]);
    })

    it('Should return how many elements are in the array', async() => {
        const db = new DB();
        const first = await db.insert({name: 'testowe1', id: 5});
        const second = await db.insert({name: 'testowe2', id: 7});
        const elements = await db.getRows();

        expect(elements.length).toBe(2);
    })

    
})