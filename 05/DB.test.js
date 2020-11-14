import DB from './DB';

describe('test for class DB', () => {
    it("ID can be only number", () => {
         const db = new DB();
         const promise = db.insert()
         db.insert({a: 1, b: 2})
        .then(() => db.insert({a: 3, b: 4}))

    })


     it("Item was remove", () => {
          const db = new DB();
          const promise = db.remove()
         .then(() => db.remove(2))
     })


     it("ID have to be set!", () => {
          const db = new DB();
          const promise = db.update()
         .then(() => db.update(1))
     })

 
   
    
   
  

})


