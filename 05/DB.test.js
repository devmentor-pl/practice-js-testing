import DB from "./DB";

describe("class DB", () => {
  //Ostatecznie usunąłem test tworzenia nowego obiektu, dlatego, że nie widzę powodu dla którego miałby się nie stworzyć. W przypadku podania argumentów do konstruktora i tak nic złego się nie dzieje.
  describe("insert(data)", () => {
    // scenario
    it("REJECTS: the promise | WHEN: data ID is not a number", async () => {
      // given
      const db = new DB();
      // Czy nie brakuje tutaj when?
      // then
      await expect(db.insert({ id: "not a number", a: 1, b: 2 })).rejects.toBe(
        "ID can be only number!"
      );
    });

    it("REJECTS: the promise | WHEN: data ID is a duplicate", async () => {
      const db = new DB();

      await db.insert({ id: 5, a: 1, b: 2 });
      await expect(db.insert({ id: 5, a: 2, b: 3 })).rejects.toBe(
        "ID can't be duplicated!"
      );
    });

    it("REJECTS: the promise | WHEN: there's no data", async () => {
      const db = new DB();

      await expect(db.insert()).rejects.toBeTruthy();
    });

    it("Grants new ID | WHEN: data don't have an ID", async () => {
      const db = new DB();

      await db.insert({ a: 1, b: 2 });
      expect(db._rows[0].id).toBeTruthy();
    });

    it("PUSHES: data to the array", async () => {
      const db = new DB();
      await db.insert({a: 1, b: 2 });
      expect(db._rows.length === 1).toBeTruthy();
    });
  });

  describe("remove(id)", () => {
    it("REJECTS: the promise | WHEN: provided ID doesn't match any item", async () => {
      const db = new DB();

      await expect(db.remove(3)).rejects.toBe("Item not exist!");
    });

    it("RESOLVES: the promise | WHEN: provided ID matches an item", async () => {
      const db = new DB();

      await db.insert({ id: 5, a: 1, b: 3 });
      await expect(db.remove(5)).resolves.toBe("Item was removed!");
    });
  });

  describe("update(data)", () => {
    it(`REJECTS: the promise | WHEN: data ID is not provided`, async () => {
      const db = new DB();

      await expect(db.update("not an ID")).rejects.toBe("ID have to be set!");
    });

    it(`REJECTS: the promise | WHEN: provided ID doesn't match any item`, async () => {
      const db = new DB();

      await expect(db.update({ id: 1, a: 3, b: 4 })).rejects.toBe(
        "ID not found!"
      );
    });

    it(`UPDATES: item`, async () => {
      const db = new DB();
      const newItem = {
        id: 5,
        a: 2,
        b: 3,
      };

      await db.insert({ id: 3, a: 1, b: 2 });
      await db.insert({ id: 2, a: 1, b: 2 });
      await db.insert({ id: 5, a: 1, b: 2 });
      await db.insert({ id: 1, a: 1, b: 2 });

      await db.update(newItem);

      const selectedItem = db._rows.filter((item) => {
        return item.id === newItem.id;
      });
      await expect(selectedItem[0]).toBe(newItem);
    });

    it("RESOLVES: the promise", async () => {
      const db = new DB();

      await db.insert({ id: 1, a: 1, b: 2 });
      await expect(db.update({ id: 1, a: 2, b: 3 })).resolves.toBeTruthy();
    });
  });

  describe("getRows()", () => {
    it(`The promise returns the array as it's value | WHEN: it exists`, async () => {
      const db = new DB();
      const result = await db.getRows();
      await expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("select(id)", () => {
    it(`REJECTS: the promise | WHEN: provided ID doesn't match any item`, async () => {
      const db = new DB();

      await expect(db.select(1)).rejects.toBe("ID not found");
    });

    it(`RESOLVES: the promise with selected item as its value | WHEN: provided ID matches any item`, async () => {
      expect.assertions(2);

      const db = new DB();

      const newObj = {
        id: 5,
        a: 1,
        b: 2
      }

      await db.insert(newObj);
      const insertedObject = await db.select(5);
      await expect(insertedObject.a).toBe(newObj.a);
      await expect(insertedObject.b).toBe(newObj.b);
    });
  });

  describe("truncate()", () => {
    it("Assigns empty array to the array", async () => {
      const db = new DB();

      await db.insert({ a: 1, b: 2 });
      await db.truncate();
      await expect(db._rows.length).toBe(0);
    });

    it(`RESOLVES: the promise with "true" value`, async () => {
      const db = new DB();
      await expect(db.truncate()).resolves.toBe(true);
    });
  });
});
