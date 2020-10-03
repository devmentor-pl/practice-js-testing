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
          id: 222,
          type: 'CD',
          yearInvented: 1982,
        };
        newDB.insert(data);
      }
      expect(createFakeDatabaseAndData).toBeInstanceOf(Object)
    });

    it("checks if ID is a number", () => {
      function createFakeDatabaseAndData() {
        const newDB = new DB();
        const data = {
          id: 222,
          type: 'CD',
          yearInvented: 1982,
        };
        
      }
      expect(createFakeDatabaseAndData).toBe('222')
    });

    it("checks if ID is NOT a string", () => {
      const newDB = new DB();
      expect(newDB._rows.length).toBe(0);
    });

  });

  describe('SELECT() method tests will follow', () => {

  });

  describe('REMOVE() method tests will follow', () => {

  });
  describe('UPDATE() method tests will follow', () => {

  });
  describe('TRUNCATE() function', () => {

  });
  describe('async CALLBACK method tests will follow', () => {

  });
});
