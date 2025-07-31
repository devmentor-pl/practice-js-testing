import DB from './DB';

describe('Insert method testing', () => {
    it('Get 1 when first number added', async () => {
        const dataBase = new DB();
        await dataBase.insert({id: 2, color: 'green'});

        const rows = await dataBase.getRows()
        const rowsLength = rows.length
        expect(rowsLength).toBe(1)
    })


    it('ID can be only number! If no reject ', async () => {
        const dataBase = new DB();

        try {
            await dataBase.insert({id: 'a', color: 'green'});

        } catch(error) {
            expect(error).toBe('ID can be only number!')

        }
    })

    it('ID can\'t be duplicated! If it is reject ', async () => {
        const dataBase = new DB();

        try {
            await dataBase.insert({id: 1, color: 'green'});
            await dataBase.insert({id: 1, color: 'yellow'});

        } catch(error) {
            expect(error).toBe('ID can\'t be duplicated!')

        }
    })


})

describe('Select method testing', () => {
    it('Select existing item by ID', async () => {
        const dataBase = new DB();
        const data = { id: 1, color: 'blue' };
        await dataBase.insert(data);

        const selectedItem = await dataBase.select(1);
        expect(selectedItem).toEqual(data);
    });

    it('Reject when ID not found', async () => {
        const dataBase = new DB();

        try {
            await dataBase.select(998934);
        } catch (error) {
            expect(error).toBe('ID not found');
        }
    });

    it('Select should reject if no ID provided', async () => {
        const dataBase = new DB();

        try {
            await dataBase.select();
        } catch (error) {
            expect(error).toBe('ID not found');
        }
    });




})