import DB from './DB';



describe('Running tests for class DB', () => {

  describe('checking class', () => {
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
  })


  describe('INSERT()', () => {

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

  describe('SELECT()', () => {

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
        "id": 2,
        "region": "pl",
        "type": "CD"
      }))
    });

  })

  describe('REMOVE()', () => {

    it('rejects when no ID passed', async () => {
      const subject = new DB();
      try {
        await subject.remove();
      } catch (err) {
        expect(err).toEqual('Item not exist!')
      }
    })

    it('resolves if ID exists', async () => {
      const subject = new DB();
      const randomData = {
        id: 2,
        region: 'pl'
      };

      subject.insert(randomData);
      console.log(subject._rows); // czemu tutaj dostaję UNDEFINED?

      const toRemove = await subject.remove(2);
      expect(toRemove).toEqual('Item was removed!')
    })
  })

  describe('UPDATE() method tests will follow', () => {

    it("should reject if data is not passed", async () => {
      const subject = new DB();
      const randomData = {
        id: 2,
        region: 'pl'
      };
      const populateData = await subject.insert(randomData);
      console.log(subject._rows); // ==> [] 

      try {
        subject.update();
      } catch (err) {
        expect(err).toEqual('ID have to be set!')
      }
    });

    it('updates if ID match ID of data already exisiting in DB', async () => {
      const subject = new DB();
      subject._rows[0] = {
        "id": 99,
        "region": "usa",
        "type": "CD"
      }
      const updateMe = {
          "id": 99,
          "region": "usa",
          "type": "CD"
      };
      
      const result = await subject.update(updateMe);
      expect(result).toBe(updateMe);
    });
  })

  describe('TRUNCATE() method tests will follow', () => {

    it("should resolve every time it is called", () => {

    });
  })

});