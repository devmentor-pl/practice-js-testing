import DB from './DB';


describe('insert method' , () => {

    it('return ID can be only number! when typeof id !== number' , async () => {

        expect.assertions(1);
        const subject = new DB();
        const data = { id: '3' }

        try {
            await subject.insert(data)
        } catch (err) {
            expect(err).toEqual('ID can be only number!')
        }
    })

    it('return ID can\'t be duplicated! when ID is duplicated' , async() => {

        const subject = new DB();
        const data = { id: 1 };

        await subject.insert(data);

        const data1 = { id: 1 };

        await expect( subject.insert(data1) ).rejects.toMatch('ID can\'t be duplicated!')
    })

    it('return data with automatically assigned id if not given' , async() =>{

        const subject = new DB();
        const data = { name: 'Kajetan' };

        await subject.insert(data)

        const rows = await subject.getRows();

        expect( rows[0].id ).toBe(1);
    })
})

describe('select method' , () => {

    it('return row if existed' , async() => {

        const subject = new DB();
        const data = { id: 1 };
        const data1 = { id: 2 };

        await subject.insert(data);
        await subject.insert(data1);

        await expect( subject.select(1) ).resolves.toBe(data);
        await expect( subject.select(2) ).resolves.toBe(data1);
    })

    it('return ID not found when id is not found' , async() => {

        expect.assertions(1);

        const subject = new DB();

        try {
            await subject.select(1);
        } catch(err) {
            expect(err).toEqual('ID not found');
        }
    })
})

describe('remove method' , () => {

    it('reject when id not exist' , async() => {

        expect.assertions(1);

        const subject = new DB()

        try {
            await subject.remove(1);
        } catch(err) {
            expect(err).toMatch('Item not exist!');
        }
    })

    it('resolve when id is existed' , async() => {

        const subject = new DB();
        const data = { id: 1 };

        await subject.insert(data)

        await expect( subject.remove(1) ).resolves.toEqual('Item was remove!')

    })

    it('remove only desirable id' , async() => {

        const subject = new DB();
        const data1 = { id: 1 };
        const data2 = { id: 2 };

        await subject.insert(data1);
        await subject.insert(data2);
        await subject.remove(2);

        const rows = await subject.getRows();

        expect( rows.length ).toBe(1);
    })
})

describe('update method' , () => {

    it('reject if data don\'t have id' , async() => {

        const subject = new DB();
        const data = { name: 'Kajetan' , id: 1 };

        await subject.insert(data);

        const dataToUpdate = { name: 'Kajetan' }

        await expect( subject.update(dataToUpdate) ).rejects.toMatch('ID have to be set!');
    })

    it('reject if ID is not found' , async() => {

        const subject = new DB();
        const data = { name: 'Kajetan' , id: 1 };

        await subject.insert(data);

        const dataToUpdate = { name: 'Kajetan' , id: 2};

        await expect( subject.update(dataToUpdate) ).rejects.toEqual('ID not found!') ;
    })

    it('resolve if ID is found' , async() => {

        const subject = new DB();

        const data = { name: 'Kajetan' , id: 1};
        await subject.insert(data);

        const dataToUpdate = { name: 'Mateusz' , id:1 };
        await subject.update(dataToUpdate);

        const result = subject.select(1);

        await expect(result).resolves.toBe(dataToUpdate)
    })
})

describe('trunscate method' , () => {

    it('resolve true when rows length is equal to 0' , async() => {

        const subject = new DB();
        const data = { name: 'Kajetan' , id: 1}

        await subject.insert(data);
        await subject.truncate();

        const rows = await subject.getRows()

        expect( rows.length ).toBe(0);
    })
})


describe('getRows method' , () => {

    it('should return empty array' , async() => {

        const subject = new DB();
        const expected = [];

        await expect( subject.getRows() ).toEqual( expect.arrayContaining(expected) );
    })

    it('should return the content of the array' , async() => {

        const subject = new DB();

        const data = { name: 'Kajetan' , id: 1};
        await subject.insert(data);

        const expected = [data];

        await expect( subject.getRows() ).resolves.toEqual( expected )
    })
})