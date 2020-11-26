import DB from './DB';

describe('insert', () => {


    // Nie działa zgodnie z zamierzeniem
    /*  it('Should thrwo an error when try to duplicate ID',
         async () => {

             const database = new DB();

             const result = await database.insert({
                 a: 'X',
                 id: 1
             }, {
                 b: 'Y',
                 id: 1
             }, {
                 c: 'Z',
                 id: 1
             })


             expect(result).toThrow();
         }) */




    it('Should insert first data with id = 1', async () => {
        const database = new DB();

        const result = await database.insert({
            x: 'X'
        })

        expect(result).toStrictEqual({
            x: 'X',
            id: 1
        })
    })

    it('Should insert data with id = 2', async () => {
        const database = new DB([{
            x: 'X',
            id: 1
        }]);

        const result = await database.insert({
            y: 'Y',
            id: 2
        });

        expect(result).toStrictEqual({
            y: 'Y',
            id: 2
        })
    })


})

describe('remove', () => {

    // Nie działa
    /*  it('Should throw if try to remove item with id that not exists', async () => {

         const database = new DB([{
             x: 'X',
             id: 1
         }]);

         const promise = database.remove(2)

         return promise.then(result => {
             expect(result).toBe('Item not exist!')
         })

     }) */

})