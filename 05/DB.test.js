import DB from './DB';

describe('test for class DB', () => {
describe("INSERT", () =>  {

     it('ID can be only number!', async() => {
          const db = new DB;
          await db.insert({id: 2})
          await db.insert({id: 5})
          expect(db.insert({id: 2, id: 5 })).rejects.toMatch('ID can be only number!');
     })

     it('ID can\'t be duplicated!', async() => {
          const db = new DB;
          await db.insert({id: 2})
          await db.insert({id: 6})
          expect(db.insert({id: 2, id: 6})).rejects.toEqual('ID can\'t be duplicated!');
     })
})

describe("SELECT", () =>  {

     it("ID not found", async() => {
          const db = new DB();
          return db.select({id : undefined}).catch((error) => {
          expect(error).toBe('ID not found')
        })
       })
})
/*https://jestjs.io/docs/en/expect#resolves*/

describe("REMOVE", () => {

     it("Item was remove", () => {
          const db = new DB();
          return db.remove({id: 6}).catch((error) => {
          expect(error).toBe('Item not exist!')
       })
     })
     // it("Item was remove", () => {
     //      const db = new DB();
     //      return db.remove({id: 6}).catch((error) => {
     //      expect(error).toBe('Item was remove')
     //   })
     // })

})


describe("UPDATE", () => {

     it("ID have to be set!", () => {
          const db = new DB();
          return db.update({id: 9}).catch((error) => {
          expect(error).toBe('ID not found!')
          })
     })
})


describe("GET_ROWS", () => {
   
      it("return null if rows are not found", () => {
           const db = new DB();
           return db.getRows({})
           .catch((error) => {
            expect(error.toBe(null))
           })
      })
      it("return number added rows", async() => {
           const db = new DB();
           await db.insert({id: 7})
           await db.insert({id: 8})
           await db.insert({id: 5})
           await db.getRows()
           await expect(db._rows.length).toBe(3)
           })
      })

})

describe("TRUNCATE", () => {
     it("remove all rows", async() => {
          const db = new DB();
          await db.insert({id: 8})
          await db.insert({id: 5})
          await db.insert({id: 7})
          await db.truncate()
          await expect(db._rows.length).toBe(0)


     })
})


  



