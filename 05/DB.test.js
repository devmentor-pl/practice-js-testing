import DB from './DB';

describe('DB', () => {
    describe('insert()', () => {
        it('Should stop function when ID is not a number', async () => {
        expect.assertions(1)
            try {
                 const db = new DB()
                await db.insert({name: 'Anna', city: 'Cracow', id: 'x'})
            } catch(err)  {
                 expect(err).toBe('ID can be only number!')
            }
         })

        it('Should stop function when ID is duplicated', async () => {
            expect.assertions(1)
            try {
                const db = new DB()
                await db.insert({name: 'Anna', city: 'Cracow', id: 1})
                await db.insert({name: 'Anna', city: 'Cracow', id: 1})
            } catch(err)  {
                expect(err).toBe('ID can\'t be duplicated!')
            }
        })  
    })

    describe('select()', () => {
        it('Should return error when ID is not found', async () => {
        expect.assertions(1)
            try {
                const db = new DB()
                await db.select(1)

            } catch(err)  {
                expect(err).toBe('ID not found')
            }
        })  
    })

    
    describe('remove()', () => {
        it('Should return error when item not exist', async () => {
        expect.assertions(1)
            try {
                const db = new DB()
                await db.insert({name: 'Anna', city: 'Cracow', id:1})
                await db.remove(2)

            } catch(err)  {
                expect(err).toBe('Item not exist!')
            }
        })  

        it('Should removed item', async () => {
            expect.assertions(1)
                 try {
                    const db = new DB()
                    await db.insert({name: 'Anna', city: 'Cracow', id:1})
                    await db.remove(1)
                    await db.select(1)
    
                } catch(err)  {
                    expect(err).toBe('ID not found')
             }
            })  
    })

    describe('update()', () => {
        it('Should return error when item is not set', async () => {
            expect.assertions(1)
                try {
                    const db = new DB()
                    await db.insert({name: 'Anna', city: 'Cracow', id:1})
                    await db.update({name: 'Anna', city: 'Warsaw'})
    
                } catch(err)  {
                    expect(err).toBe('ID have to be set!')
                }
            })  

            it('Should return error when ID is not found', async () => {
                expect.assertions(1)
                    try {
                        const db = new DB()
                        await db.update({name: 'Ala', city: 'Gdynia', id:2})
        
                    } catch(err)  {
                        expect(err).toBe('ID not found!')
                    }
                })  
        })
})

