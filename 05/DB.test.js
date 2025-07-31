import DB from "./DB";

describe("Insert", () => {
  it("check if row number is equel 1", async () => {
    const database = new DB();
    await database.insert({ id: 1 });
    const rows = await database.getRows();
    expect(rows.length).toBe(1);
  });

  it("reject if ID is a number", async () => {
    expect.assertions(1);
    const database = new DB();

    try {
      await database.insert({ id: "1", name: "Ariadna" });
    } catch (err) {
      expect(err).toBe("ID can be only number!");
    }
  });

  it("reject if ID is duplicated", async () => {
    expect.assertions(1);
    const database = new DB();

    try {
      await database.insert({ id: 1, name: "Ariadna" });
      await database.insert({ id: 1, name: "Kasia" });
    } catch (err) {
      expect(err).toBe("ID can't be duplicated!");
    }
  });

  it("insert data is correct", async () => {
    const database = new DB();

    const data = { id: 1 };
    const insertData = await database.insert({ id: 1 });

    expect(insertData).toEqual(data);
  });
});

describe("select", () => {
  it("check if ID exists", async () => {
    const database = new DB();
    const id = 1;
    await database.insert({ id: id });
    const item = await database.select(1);

    expect(item.id).toBe(id);
  });
  it(" ID does not exists", async () => {
    expect.assertions(1);
    const database = new DB();

    try {
      await database.select(1);
    } catch (err) {
      expect(err).toBe("ID not found");
    }
  });
});

describe("remove", () => {
  it("Id doen't exist ", async () => {
    const database = new DB();
    expect.assertions(1);
    try {
      await database.remove(1);
    } catch (err) {
      expect(err).toBe("Item not exist!");
    }
  });

  it("remove item", async () => {
    expect.assertions(2);
    const database = new DB();

    await database.insert({ id: 1, name: "Ariadna" });
    const rowsBefore = await database.getRows();
    await database.remove(1);
    const rowsAfter = await database.getRows();

    expect(rowsBefore.length).toBe(1);
    expect(rowsAfter.length).toBe(0);
  });
});

describe("update", () => {
  it("check if ID is set", async () => {
    expect.assertions(1);
    const database = new DB();
    try {
      await database.update({ name: "Ariadna" });
    } catch (err) {
      expect(err).toBe("ID have to be set!");
    }
  });

  it("check if id updated", async () => {
    const database = new DB();

    await database.insert({ id: 1, name: "Ariadna" });
    const updatedItem = await database.update({ id: 1, name: "Sławomir" });

    expect(updatedItem.name).toBe("Sławomir");
  });

  it("check if ID was found", async () => {
    expect.assertions(1);
    const database = new DB();
    await database.insert({ id: 1, name: "Ariadna" });

    try {
      await database.update({ id: 2, name: "Sławomir" });
    } catch (err) {
      expect(err).toBe("ID not found!");
    }
  });
});

describe("getRows", () => {
  it("check if number of rows is 2", async () => {
    const database = new DB();
    await database.insert({ id: 1, name: "Ariadna" });
    await database.insert({ id: 2, name: "Sławomir" });
    const rows = await database.getRows();

    expect(rows.length).toBe(2);
  });
});

describe("truncate", () => {
  it("check if this_row is an empty array after truncate function", async () => {
    const database = new DB();
    await database.insert({ id: 4, name: "Ariadna" });
    await database.truncate();
    const rows = await database.getRows();

    expect(rows).toStrictEqual([]);
  });
});
