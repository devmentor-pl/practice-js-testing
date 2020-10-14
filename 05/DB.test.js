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

    it("Checks if data that has been passed into the insert() returns accurate value (2)", () => {
      function createFakeDatabaseAndData() {
        const newDB = new DB();
        const data = {
          type: 'CD',
          yearInvented: 1982,
          id: 2
        };
        return newDB.insert(data);
      }
      return createFakeDatabaseAndData().then(id => expect(id).toBe(2))
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
      return expect(newDB.insert(data)).resolves.toEqual(2222) // mycode, should work propely


      // NOTES BELOW
      // newDB.insert(data).then(id => expect(id).toEqual(2222)) // my code - wrong.
      // !!! jak zwracana jest obietnica (a .insert()zwraca obietnicę) to zawsze powinniśmy wykorzystać return!!!
      // return newDB.insert().then( id => expect(id).toEqual(2222)) // Mateusz proposition
    })
    it('Rejects the promise if data.id is not a number', () => {
      expect.assertions(1);
      const newDataBase = new DB();
      const randomData = {
        id: 'e',
        region: 'de',
        availability: true,
      }
      return expect(newDataBase.insert(randomData)).rejects.toMatch('ID can be only number!')
    });
  })

  describe('SELECT()', () => {

    it("Throws if ID is not passed or not in the database", () => {
      expect.assertions(1);
      const dataBase = new DB();
      const result = dataBase.select();
      return result.catch(e => expect(e).toBe('ID not found'))
    });

    it('resolves if ID exists in database', () => {
      async function populateFakeDataAndRunSelectMethod() {
        const dataBase = new DB();
        const randomData = {
          id: 2,
          region: 'pl',
          type: 'CD'
        }
        await dataBase.insert(randomData)
        const result = await dataBase.select(2);
        return result;
      }
      return populateFakeDataAndRunSelectMethod().then(data => expect(data).toMatchObject({
        id: 2,
        region: "pl",
        type: "CD"
      }))
    });

  })

  describe('REMOVE()', () => {

    it('rejects when no ID passed', async () => {
      expect.assertions(1);
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

      await subject.insert(randomData);
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

      try {
        subject.update();
      } catch (err) {
        expect(err).toEqual('ID have to be set!')
      }
    });

    it('<Updates if ID exists in DB', async () => {
    
      const subject = new DB();
      subject._rows[0] = {
        id: 100,
        region: "usa",
        type: "CD"
      }
      const updateMe = {
          id: 100,
          region: "UK",
          type: "casette"
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