import DB from './DB';

describe('test for class DB', () => {
    // it("ID can be only number", () => {
    //     const db = new DB(); 
    //      const promise = db.insert()
    //      db.insert({a: 1, b: 2})
    //     .then(() => db.insert({a: 3, b: 4}))

    // })

    it("ID can be only number", () => {
         const db = new DB();
         return db.insert({id: 7, id: 2}).catch((error) => {
         expect(error).toBe({id: 7, id: 2})
       })

     })

/*https://jestjs.io/docs/en/expect#resolves*/

   it('ID can\'t be duplicated!', async() => {
        const db = new DB;
        await db.insert({id: 6})
        await expect(db.insert({id: 6})).rejects.toEqual('ID can\'t be duplicated!');
   })

     it("Item was remove", () => {
          const db = new DB();
          const result = db.remove({id: 4})
         .then(() => db.remove())
     })


     it("ID not found", () => {
        // const newData = {
        //     id: 10
        // }
          const db = new DB();
          return db.select({id: 8}).catch((error) => {
          expect(error).toBe("ID not found")
       })
     })
    
     it("ID have to be set!", () => {
          const db = new DB();
          const promise = db.update()
         .then(() => db.update())
     })

     it("get all rows", () => {
         const db = new DB();
         const promise = db.getRows()
         .then(() => db.getRows)
     })
})


