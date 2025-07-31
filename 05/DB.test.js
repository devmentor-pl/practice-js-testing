import DB from './DB';

describe('.insert()', async () => {

    it('take 1 item', async () => {
        const dataBase =new DB();
        dataBase.insert({id: 1, name: 'devmentor'});
        const rows = await dataBase.getRows();

        expect(rows.length).toBe(1);
    });

    it('show error when id is not a number', async () => {
        const dataBase =new DB();
        try {
            await dataBase.insert({id: '1', name: 'devmentor'});
        }catch (err) {
        
        expect(err).toBe('ID can be only number!');
        
        }
    });
});
