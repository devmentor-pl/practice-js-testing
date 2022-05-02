import DB from './DB';

describe('DB', () => {
    describe('insert()', () => {
        it('stop function when ID is not a number', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const data = {id: '1'};
            await dataBase.insert(data).catch(e => expect(e).toMatch('ID can be only number!'));
        });

        it('stop function when ID is duplicated', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const data = {id: 1};
            await dataBase.insert(data);
            const newData = {id: 1}
            await dataBase.insert(newData).catch(e => expect(e).toMatch('ID can\'t be duplicated!'));
        });
    });

    describe('select()', () => {
        it('show info when ID not found', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const id = 1;
            await dataBase.select(id).catch(e => expect(e).toMatch('ID not found'));
        });
    });

    describe('remove()', () =>  {
        it('show info when item not exist', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const id = 1;
            await dataBase.remove(id).catch(e => expect(e).toMatch('Item not exist!'));
        });

        it('remove when item exist', async () => {
            const dataBase = new DB();
            const data = {id: 1};
            await dataBase.insert(data)
            await expect(dataBase.remove(data.id)).resolves.toBe('Item was remove!');
        });
    });

    describe('update()', () => {
        it('reject when ID is not set', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const data = {name: "Kuba"};
            await dataBase.update(data).catch(e => expect(e).toBe('ID have to be set!'));
        });

        it('reject when ID is not found', async () => {
            expect.assertions(1);
            const dataBase = new DB();
            const data = {id: 1};
            await dataBase.insert(data);
            const data2 = {id: 2};
            await dataBase.update(data2).catch(e => expect(e).toBe('ID not found!'));
        });
    });

    describe('truncate()', () => {
        it('clear database', async () => {
            const dataBase = new DB();
            const data1 = {id: 1};
            const data2 = {id: 2};
            await dataBase.insert(data1);
            await dataBase.insert(data2);
            await dataBase.truncate();
            const dataBaseRows = await dataBase.getRows();
            expect(dataBaseRows.length).toBe(0);
        })
    })
});
