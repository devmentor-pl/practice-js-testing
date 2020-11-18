import DB from './DB';

describe('test for class DB', () => {



          describe("INSERT", () =>  {
               it('ID can be only number!', async() => {
               const db = new DB;
               return expect(db.insert({id: 'xyz'})).rejects.toBe('ID can be only number!');
               })
             
               it('ID can\'t be duplicated!', async() => {
               const db = new DB;
               await db.insert({id: 2})
               return expect(db.insert({id: 2})).rejects.toEqual('ID can\'t be duplicated!');
               })
           })
             

          describe("SELECT", () =>  {
               it("ID not found", async() => {
               const db = new DB();
               return expect(db.select(123)).rejects.toBe('ID not found');
                })
            })
               

           describe("REMOVE", () => {

               it("Item not exist!", async() => {
               const db = new DB();
               return db.remove(3).catch((error) => {
               return expect(error).toBe('Item not exist!')
                 })
              })
               it("Item was remove", async() => {
               const db = new DB();
               await db.insert({id: 10})
               return expect(db.remove(10)).resolves.toBe('Item was remove!')
                })
              })


           describe("UPDATE", () => {
               it("ID have to be set!", () => {
               const db = new DB();
               return db.update({id: 9}).catch((error) => {
               return expect(error).toBe('ID not found!')
             })
            })
          })


           describe("GET_ROWS", () => {
               it("return null if the database is empty", () => {
               const db = new DB();
               return db.getRows().then(rows => {
               expect(rows.length).toBe(0)
                })
             })

               it("return number added rows", async() => {
               const db = new DB();
               await db.insert({id: 7})
               await db.insert({id: 8})
               await db.insert({id: 5})
               // await db.getRows()
               // await expect(db._rows.length).toBe(3)
               const rows = await db.getRows()
               await expect(db._rows.length).toBe(3)
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
})