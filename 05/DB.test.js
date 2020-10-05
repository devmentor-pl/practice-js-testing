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

    it("checks if data that has been passed into the insert() is type object", () => {
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


    it("should resolve if data.id is not passed", () => {
      const newDB = new DB();
      expect(newDB.insert()).resolves.toEqual({});
    });

    it("should reject with error if data.id is a not number", () => {
        // given
        function funFun() {
          const newDB = new DB();
          const data = {
            id: 'word',
            region: 'pl',
            type: 'CD'
          }
          const promise = newDB.insert(data);
          return promise;
        }

        funFun().then(result => {
          expect(result).rejects.toMatch('ID can be only number!');
          // expect(result).rejects.toMatch('ID can be only number!');
        })
    })
  })

  describe('SELECT() method tests will follow', () => {

    it("should reject if id is not passed", () => {

    });

    it('rejects if ID is not a number', () => {
        // nie jestem pewien tego warunku
    });
  })

  describe('REMOVE() method tests will follow', () => {

    it("should reject if ID is not passed", () => {

    });

    it('rejects if ID is not in the array', () => {

    });

    it('resolves when item exists in the array ', () => {

    });
  })
  describe('UPDATE() method tests will follow', () => {

    it("should reject if data is not passed", () => {

    });

    it('resolve if ID match ID of data already exisiting in DB', () => {

    });
  })

  describe('TRUNCATE() method tests will follow', () => {

    it("should resolve every time it is called", () => {

    });
  })
});
