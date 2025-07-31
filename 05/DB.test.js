import DB from "./DB";

describe("insert()", () => {
  it("should return 'ID can be only number!' when id is not a number", async () => {
    expect.assertions(1);
    const db = new DB();

    try {
      await db.insert({ id: "a" });
    } catch (err) {
      expect(err).toBe("ID can be only number!");
    }
  });

  it("should add a new row to database", async () => {
    expect.assertions(1);
    const db = new DB();

    const dbRowsBeforeInsert = await db.getRows();
    const dbRowsBeforeInsertLength = dbRowsBeforeInsert.length;

    await db.insert({ id: 1 });

    const dbRowsAfterInsert = await db.getRows();
    const result = dbRowsAfterInsert.length;

    expect(result).toBe(dbRowsBeforeInsertLength + 1);
  });

  it("should return 'ID can't be duplicated!' when id is duplicated", async () => {
    expect.assertions(1);
    const db = new DB();
    await db.insert({ id: 1 });

    try {
      await db.insert({ id: 1 });
    } catch (err) {
      expect(err).toBe("ID can't be duplicated!");
    }
  });
});

describe("select()", () => {
  it("should return a row if it exists in db", async () => {
    expect.assertions(1);
    const db = new DB();

    const obj = { id: 1, test: "abc" };

    await db.insert(obj);

    const result = await db.select(1);

    expect(result).toBe(obj);
  });

  it("should return 'ID not found' when id not exist in db", async () => {
    expect.assertions(1);

    const db = new DB();

    try {
      await db.select(1);
    } catch (err) {
      expect(err).toBe("ID not found");
    }
  });
});

describe("remove()", () => {
  it("should return 'Item not exist!' when id not exist in db", async () => {
    expect.assertions(1);

    const db = new DB();

    try {
      await db.remove(1);
    } catch (err) {
      expect(err).toBe("Item not exist!");
    }
  });

  it("should remove item from db", async () => {
    expect.assertions(1);

    const db = new DB();

    await db.insert({ id: 1 });

    await db.remove(1);

    try {
      await db.select(1);
    } catch (err) {
      expect(err).toBe("ID not found");
    }
  });
});

describe("update()", () => {
  it("should return 'ID have to be set!' when id is not set", async () => {
    expect.assertions(1);
    const db = new DB();

    try {
      await db.update({ test: "string" });
    } catch (err) {
      expect(err).toBe("ID have to be set!");
    }
  });

  it("should update an existing row", async () => {
    expect.assertions(1);
    const db = new DB();

    const data = { id: 1, name: "John" };
    const newData = { id: 1, name: "Paul" };

    await db.insert(data);
    await db.update(newData);
    const result = await db.select(1);

    expect(result).toBe(newData);
  });
});

describe("truncate()", () => {
  it("should clear database", async () => {
    expect.assertions(1);
    const db = new DB();

    await db.insert({ id: 1 });
    await db.truncate();

    const dbRows = await db.getRows();
    const result = dbRows.length;

    expect(result).toBe(0);
  });
});
