import DB from "./DB";

describe("Insert", () => {
  it("should add correct data to the database", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };

    const insertedData = await db.insert(data);

    expect(insertedData).toEqual(data);
  });

  it("should add data to the database when id is not given", async () => {
    const db = new DB();
    const data = {
      key: "value",
    };

    const insertedData = await db.insert(data);

    expect(insertedData).toEqual(data);
  });

  it("should not add data to the database when id is not a number", () => {
    const db = new DB();
    const data = {
      id: "1",
      key: "value",
    };

    return db.insert(data).catch((err) => {
      expect(err).toBe("ID can be only number!");
    });
  });

  it("should not add data to the database when the given id already exists", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };

    await db.insert(data);

    return db.insert(data).catch((err) => {
      expect(err).toBe("ID can't be duplicated!");
    });
  });
});

describe("Select", () => {
  it("should return data when id exists", async () => {
    const db = new DB();
    const id = 1;
    const data = {
      id: id,
      key: "value",
    };

    await db.insert(data);

    const row = await db.select(id);

    expect(row).toEqual(data);
  });

  it("should not return data when id does not exist", () => {
    const db = new DB();
    const id = 1;

    return db.select(id).catch((err) => {
      expect(err).toBe("ID not found");
    });
  });

  it("should fail when id is not a number", () => {
    const db = new DB();

    return db.select("1").catch((err) => {
      expect(err).toBe("ID can be only number!");
    });
  });
});

describe("Remove", () => {
  it("should succeeded when existed id is given", async () => {
    const db = new DB();
    const id = 1;
    const data = {
      id: id,
      key: "value",
    };

    await db.insert(data);

    const result = await db.remove(id);

    expect(result).toBe("Item was removed!");
  });

  it("should fail when id not exist", async () => {
    const db = new DB();

    const data = {
      id: 1,
      key: "value",
    };

    await db.insert(data);

    return db.remove(2).catch((err) => {
      expect(err).toBe("Item not exist!");
    });
  });

  it("should fail when id is not a number", () => {
    const db = new DB();

    return db.remove("1").catch((err) => {
      expect(err).toBe("ID can be only number!");
    });
  });
});

describe("Update", () => {
  it("should change data", async () => {
    const db = new DB();
    const id = 1;
    const data = {
      id: id,
      key: "value",
    };
    const newData = {
      id: id,
      key: "new value",
    };

    await db.insert(data);

    const updatedData = await db.update(newData);

    expect(updatedData).toEqual(newData);
  });

  it("should not change data when they not exist", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };
    const newData = {
      id: 2,
      key: "new value",
    };

    await db.insert(data);

    return db.update(newData).catch((err) => {
      expect(err).toBe("ID not found!");
    });
  });

  it("should not change data when id is not set", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };
    const newData = {
      key: "new value",
    };

    await db.insert(data);

    return db.update(newData).catch((err) => {
      expect(err).toBe("ID have to be set!");
    });
  });

  it("should fail when id is not a number", () => {
    const db = new DB();
    const data = {
      id: "1",
      key: "value",
    };

    return db.update(data).catch((err) => {
      expect(err).toBe("ID can be only number!");
    });
  });
});

describe("Truncate", () => {
  it("should clean up the database", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };

    await db.insert(data);

    let rows = await db.getRows();
    expect(rows.length).toBe(1);

    const result = await db.truncate();

    rows = await db.getRows();

    expect(result).toBe(true);
    expect(rows.length).toBe(0);
  });
});

describe("Get Rows", () => {
  it("should return return empty array if database is empty", async () => {
    const db = new DB();

    const rows = await db.getRows();

    expect(rows).toEqual([]);
  });

  it("should return all rows", async () => {
    const db = new DB();
    const data = {
      id: 1,
      key: "value",
    };

    await db.insert(data);

    const rows = await db.getRows();

    expect(rows).toEqual([data]);
  });
});
