import DB from './DB';

describe('insert', () => {

    it('Should throw an error when try to duplicate ID',
        async () => {

            const database = new DB();

            await database.insert({
                'x': 'x',
                'id': 1
            });

            await expect(database.insert({
                'y': 'y',
                'id': 1
            })).rejects.toBe('ID can\'t be duplicated!')
        })


    it('Should insert first data with id = 1', async () => {
        const database = new DB();

        await expect(database.insert({
            x: 'X'
        })).resolves.toEqual({
            x: 'X',
            id: 1
        })
    })

    it('Should insert second data with id = 2', async () => {
        const database = new DB();

        await database.insert({
            x: 'X',
            id: 1
        })

        await expect(database.insert({
            y: 'Y'
        })).resolves.toEqual({
            y: 'Y',
            id: 2
        })
    })
})

describe('select', () => {

    it('should select row if id exists', async () => {

        const database = new DB();

        await database.insert({
            x: 'X',
            id: 1
        })

        await expect(database.select(1)).resolves.toEqual({
            x: 'X',
            id: 1
        })
    })

    it('Should reject with ID not found when id does not exist', async () => {
        const database = new DB();
        await expect(database.select(1)).rejects.toBe('ID not found')
    })
})


describe('remove', () => {


    // Nie działa
    it('Should reject if try to remove item with id that not exists', async () => {

        const database = new DB([{
            x: 'X',
            id: 1
        }]);

        await expect(database.remove(2)).rejects.toBe('Item not exist!')

    })

    it('Should remove item from database if id exists', async () => {
        const database = new DB()

        await database.insert({
            x: 'X',
            id: 1
        })

        await database.insert({
            y: 'Y',
            id: 2
        })

        await expect(database.remove(1)).resolves.toBe('Item was remove!')
    })


})

describe('update', () => {
    it('Should update row that exists', async () => {
        const database = new DB();

        await database.insert({
            x: 'X',
            id: 1
        })

        await expect(database.update({
            x: 'X',
            id: 1
        })).resolves.toEqual({
            x: 'X',
            id: 1
        })
    })

    it('Should reject if ID not found', async () => {
        const database = new DB();

        await expect(database.update({
            id: 3
        })).rejects.toBe('ID not found!')
    })
})

describe('truncate', () => {
    it('Should resolve true when truncate', async () => {
        const database = new DB();
        await database.insert({
            x: 'X',
            id: 1
        })
        await database.insert({
            z: 'Z',
            id: 2
        })

        await expect(database.truncate()).resolves.toBeTruthy();
    })
})

describe('getRows', () => {
    it('Should resolve rows', async () => {
        const database = new DB();
        await database.insert({
            x: 'X',
            id: 1
        })

        await database.insert({
            y: 'Y',
            id: 2
        })

        await expect(database.getRows()).resolves.toEqual([{
            x: 'X',
            id: 1
        }, {
            y: 'Y',
            id: 2
        }]);
    })
})