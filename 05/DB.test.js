import DB from './DB';



describe('Running tests for class DB', () => {

  it("checks if database instance was created", () => {
    const newDB = new DB();
    expect(newDB).toBeInstanceOf(DB)
  });
  it("checks if empty array is declared", () => {
    const newDB = new DB();
    expect(newDB._rows).toBeTruthy();
  });
  it("checks if array is empty", () => {
    const newDB = new DB();
    expect(newDB._rows.length).toBe(0)
  });

  describe('INSERT() method tests will follow', () => {

    it("Checks if data that has been passed into the insert() is type object", () => {
      function createFakeDatabaseAndData() {
        const newDB = new DB();
        const data = {
          type: 'CD',
          yearInvented: 1982,
        };
        newDB.insert(data);
      }
      expect(createFakeDatabaseAndData).toBeInstanceOf(Object)
    });


    // it("Should resolve if data.id is not passed", () => {
    //   const newDB = new DB();
    //   expect(newDB.insert()).resolves.toEqual({});
    // });    
    
    it("Should resolve if ID is a number", () => {
        // given
        // I expect to get receive a Promise form insert();
        const newDB = new DB();
        const data = {
          id: 2222,
          region: 'pl',
          type: 'CD'
        }
        newDB.insert(data).then(id => expect(id).toEqual(2222))
     
        // return expect(newDB.insert(data)).resolves.toEqual(2222) // Doesnt work. Why?

    })


    it('Rejects the promise if data.id is not a number', () => {
      
      // expect.assertions(1);
      const newDB = new DB();
      const data = {
        id: 's',
        region: 'pl',
        type: 'CD'
      }
      newDB.insert(data).catch(e => expect(e).toEqual('ID can be only number!'));
    });
  })

  describe('SELECT() method tests will follow', () => {

    // doesn't work
    // it("Throws if ID is not passed or not in the database", async () => {

    //   const dataBase = new DB();
    //   const result = await dataBase.select();

    //   expect(result).rejects.toEqual('ID not found')
    // });

    it("Throws if ID is not passed or not in the database", () => {

      const dataBase = new DB();
      const result = dataBase.select();
      
      return result.catch(e => expect(e).toBe('ID not found'))
    });

    it('resolves if ID exists in database', async () => {

      function populateFakeDataAndRunSelectMethod() {
        const dataBase = new DB();
        const randomData = {
          id: 2,
          region: 'pl',
          type: 'CD'
        }
        dataBase.insert(randomData)
        const result = dataBase.select(2);
        return result;
      }

      populateFakeDataAndRunSelectMethod().then(data => expect(data).toContain({
        "id": 2, "region": "pl", "type": "CD"
      }))

    });
  })

  describe('REMOVE() method tests will follow', () => {

    it("should reject if ID is not passed", () => {

    });

  //   it('rejects if ID is not in the array', () => {

  //   });

  //   it('resolves when item exists in the array ', () => {

  //   });
  })

  // describe('UPDATE() method tests will follow', () => {

  //   it("should reject if data is not passed", () => {

  //   });

  //   it('resolve if ID match ID of data already exisiting in DB', () => {

  //   });
  // })

  // describe('TRUNCATE() method tests will follow', () => {

  //   it("should resolve every time it is called", () => {

  //   });
  // })

});
