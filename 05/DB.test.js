import DB from './DB';

describe('.insert()', () => {
    it('return 1 when one data inserted', async () => {
        const db = new DB;
        await db.insert({id:1, someData: 5});
        const rows = await db.getRows();

        expect(rows.length).toBe(1)
    });

    it('reject when id is not a number', async () => {
        expect.assertions(1)
        const db = new DB;
        try {
            await db.insert({id: "1", name: 'Ireneusz'})
        } catch(err) {
            expect(err).toBe('ID can be only number!')
        }
    })

    it('reject when id is the same as other', async () => {
        expect.assertions(1);

        const db = new DB;
        try {
            await db.insert({id:1, someData: 5});
            await db.insert({id:1, someData: 9})
        } catch(err) {
            expect(err).toBe('ID can\'t be duplicated!')
        }
    })

    it('inserted data is correct', async () => {
        const data = {id:1, someData: 5};
        const db = new DB;
        const insertedData = await db.insert(data);

        expect(insertedData).toEqual(data)

    })

})

describe('.select()', () => {
    it('select data what been inserted', async () => {
        const data = {id:1, someData: 5};
        const db = new DB;
        await db.insert(data);
        const selectedData = await db.select(1);

        expect(selectedData).toEqual(data)
    });

    it('reject when id is wrong', async () => {
        expect.assertions(1);

        const data = {id:1, someData: 5};
        const db = new DB;
        try {
            await db.insert(data);
            await db.select(2)
        } catch(err) {
            expect(err).toBe('ID not found')
        }

    })
})

describe('.remove()', () => {
    it('rows contains only data without removed one', async () => {
        expect.assertions(1)

        const dataOne = {id:1, someData: 5};
        const dataTwo = {id:2, someData: 7};
        const dataThree = {id:3, someData: 2};
        const dataFour = {id:4, someData: 9};

        const db = new DB;
        await db.insert(dataOne);
        await db.insert(dataTwo);
        await db.insert(dataThree);
        await db.insert(dataFour);
        await db.remove(3);
        const rows = await db.getRows();
        
        expect(rows).not.toContain(dataThree)  
    })

    it('reject when try to remove item with wrong id', async () => {
        expect.assertions(1)

        const dataOne = {id:1, someData: 5};
        const dataTwo = {id:2, someData: 7};
        const dataThree = {id:3, someData: 2};
        
        const db = new DB;
        try{
            await db.insert(dataOne);
            await db.insert(dataTwo);
            await db.insert(dataThree);
            await db.remove(4)

        } catch(err) {
            expect(err).toBe('Item not exist!')
        }
    })

})

describe('.update()', () => {
    it('reject when id is not set', async () => {
        expect.assertions(1)

    const dataOne = {id:1, someData: 5};
    const dataTwo = {id:2, someData: 7};
    const dataThree = {id:3, someData: 2};
    
    const db = new DB;
    try{
        await db.insert(dataOne);
        await db.insert(dataTwo);
        await db.insert(dataThree);
        await db.update({someData: 4})

    } catch(err) {
        expect(err).toBe('ID have to be set!')
    }
    })

    it('data is updated correct', async () => {
        expect.assertions(1)

        const dataOne = {id:1, someData: 5};
        const db = new DB;

        await db.insert(dataOne);
        const updatedData = await db.update({id:1, someData: 4})
        const rows = await db.getRows()

        expect(rows).toContain(updatedData)
    })
})

describe('.truncate()', () => {
    it('rows is empty after truncate function', async () => {
        
    const dataOne = {id:1, someData: 5};
    const dataTwo = {id:2, someData: 7};
    const dataThree = {id:3, someData: 2};
    
    const db = new DB;
    await db.insert(dataOne);
    await db.insert(dataTwo);
    await db.insert(dataThree);
    await db.truncate();
    const rows = await db.getRows();

        expect(rows).toEqual([])  
    })
})