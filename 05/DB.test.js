import DB from "./DB";

describe("class DB", () => {
  it(`Creates new instance of the class when the "new" is used.`, () => {
    const db = new DB();

    function createNewDB(db) {
      if (db) {
        return true;
      }

      return false;
    }

    expect(createNewDB(db)).toBe(true);
  });

  describe("db.insert()", () => {
    // scenario
    it("rejects promise when data id is not a number", async () => {
      // given
      const db = new DB();
      // Czy nie brakuje tutaj when?
      // then
      await expect(
        db.insert({ id: "not a number", a: 1, b: 2 })
      ).rejects.toBeTruthy();
    });

    it("rejects promise when provided data id is a duplicate", async () => {
      const db = new DB();

      await db.insert({ id: 5, a: 1, b: 2 });
      await expect(db.insert({ id: 5, a: 2, b: 3 })).rejects.toBeTruthy();
    });

    it("gives a new id for data when it isn't provided", async () => {
      const db = new DB();

      await db.insert({ a: 1, b: 2 });
      expect(db._rows[0].id).toBeTruthy();
    });

    it("pushes data to the array", async () => {
      const db = new DB();
      await db.insert({ a: 1, b: 2 });
      expect(db._rows.length > 0).toBeTruthy();
    });
  });

  describe("db.remove(id)", () => {
    it("rejects promise when provided id doesn't match any items' id", async () => {
      const db = new DB();

      await expect(db.remove(3)).rejects.toBeTruthy();
    });

  });
});
