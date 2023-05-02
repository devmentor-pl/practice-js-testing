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
    expect.assertions(1);
    const database = new DB();

    database.insert({ id: 1, name: "Ariadna" });
    const rows = database.getRows();
    const id = rows.id;
    const selectID = await database.select(1);

    expect(selectID).toBe(id);
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
