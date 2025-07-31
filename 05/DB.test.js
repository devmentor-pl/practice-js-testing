import DB from "./DB";

describe("insert", () => {
  it("should return 1 when one item was added", async () => {
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    await dataItem.insert(data);
    const rowsLength = (await dataItem.getRows()).length;
    expect(rowsLength).toBe(1);
  });

  it("reject when id is not a number", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: "1", car: "Audi" };
    try {
      await dataItem.insert(data);
    } catch (err) {
      expect(err).toBe("ID can be only number!");
    }
  });

  it("reject when id is duplcated", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    const data2 = { id: 1, car: "Skoda" };
    try {
      await dataItem.insert(data);
      await dataItem.insert(data2);
    } catch (err) {
      expect(err).toBe("ID can't be duplicated!");
    }
  });

  it("check added data", async () => {
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    const row = await dataItem.insert(data);

    expect(row).toEqual(data);
  });
});

describe("select", () => {
  it("reject when id is not found", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    try {
      await dataItem.insert(data);
      await dataItem.select(2);
    } catch (err) {
      expect(err).toBe("ID not found");
    }
  });

  it("check resolve when id was found", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };

    const dataInsert = await dataItem.insert(data);
    const dataSelect = await dataItem.select(1);

    expect(dataSelect).toEqual(dataInsert);
  });
});

describe("remove", () => {
  it("reject when item is not exist", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    try {
      await dataItem.insert(data);
      await dataItem.remove(2);
    } catch (err) {
      expect(err).toBe("Item not exist!");
    }
  });

  it("resolve when item is removed", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };

    await dataItem.insert(data);
    const result = await dataItem.remove(1);

    expect(result).toBe("Item was remove!");
  });
});

describe("update", () => {
  it("reject when id is not set", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { car: "Audi" };
    try {
      await dataItem.update(data);
    } catch (err) {
      expect(err).toBe("ID have to be set!");
    }
  });

  it("reject when id is not found", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    const data2 = { id: 2, car: "Skoda" };
    try {
      await dataItem.insert(data);
      await dataItem.update(data2);
    } catch (err) {
      expect(err).toBe("ID not found!");
    }
  });

  it("resolve when item is updated", async () => {
    expect.assertions(1);
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    const updateData = { id: 1, car: "Skoda" };
    await dataItem.insert(data);
    const result = await dataItem.update(updateData);

    expect(result).toEqual(updateData);
  });
});

describe("truncate", () => {
  it("resolve when truncate", async () => {
    expect.assertions();
    const dataItem = new DB();
    const data = { id: 1, car: "Audi" };
    await dataItem.insert(data);

    let rows = await dataItem.getRows();
    expect(rows.length).toBe(1);

    const result = await dataItem.truncate();
    expect(result).toBe(true);

    rows = await dataItem.getRows();
    expect(rows.length).toBe(0);
  });
});
