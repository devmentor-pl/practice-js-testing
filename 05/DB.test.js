import DB from "./DB";

describe("class DB", () => {
  it("should be a ES6 class", () => {
    expect(() => DB()).toThrow(
      "Class constructor DB cannot be invoked without 'new'"
    );
    expect(new DB()).toBeInstanceOf(DB);
  });

  describe("insert method tests", () => {
    it("should return data after adding to database", async () => {
      const db1 = new DB();
      const data = { name: "Item1", id: 1 };
      const result = await db1.insert(data);
      expect(result.name).toBe("Item1");
      expect(result.id).toBe(1);
    });

    it("should check whether id is increasing", async () => {
      const db1 = new DB();
      await db1.insert({});
      await db1.insert({});
      await db1.insert({});
      const result = await db1.insert({});
      expect(result.id).toBe(4);
    });

    it("should throw error after passing data with id, which is not a number", async () => {
      const db1 = new DB();
      const data = { id: "string" };

      await expect(db1.insert(data)).rejects.toBe("ID can be only number!");
    });

    it("should throw error after passing data with duplicated id", async () => {
      const db1 = new DB();
      await db1.insert({});
      const result = db1.insert({ id: 1 });
      await expect(result).rejects.toBe("ID can't be duplicated!");
    });
  });

  describe("select method tests", () => {
    it("should return item", async () => {
      const db1 = new DB();
      await db1.insert({});
      const result = await db1.select(1);
      expect(result).toStrictEqual({ id: 1 });
    });

    it("should throw error whether id is not found", async () => {
      const db1 = new DB();
      await expect(db1.select(1)).rejects.toBe("ID not found");
    });
  });

  describe("remove method tests", () => {
    it("should remove item from an array if item has been found", async () => {
      const db1 = new DB();
      const data1 = { id: 1 };
      const data2 = { id: 2 };

      await db1.insert(data1);
      await db1.insert(data2);

      const array = await db1.getRows();
      expect(array).toEqual([data1, data2]);

      const result = await db1.remove(1);
      expect(result).toBe("Item was removed!");

      const array2 = await db1.getRows();
      expect(array2).toEqual([data2]);
    });

    it("should throw error if id has not been found in an array", async () => {
      const db1 = new DB();
      await expect(db1.remove(1)).rejects.toBe("Item does not exist!");
    });
  });

  describe("update method tests", () => {
    it("should update after passing data with valid id", async () => {
      const db1 = new DB();
      const data1 = { id: 1, name: "John" };
      const data2 = { id: 1, name: "Ben" };
      await db1.insert(data1);
      const result = await db1.update(data2);
      expect(result).toBe(data2);
    });

    it("should throw error if id has not been found", async () => {
      const db1 = new DB();
      await expect(db1.update({ id: 1 })).rejects.toBe("ID not found!");
    });

    it("should throw error if id is 0", async () => {
      const db1 = new DB();
      await expect(db1.update({ id: 0 })).rejects.toBe("ID has to be set!");
    });

    it("should throw error if id is undefined", async () => {
      const db1 = new DB();
      await expect(db1.update({})).rejects.toBe("ID has to be set!");
    });

    it("should throw error if id is null", async () => {
      const db1 = new DB();
      await expect(db1.update({ id: null })).rejects.toBe("ID has to be set!");
    });

    it("should throw error if id is empty string", async () => {
      const db1 = new DB();
      await expect(db1.update({ id: "" })).rejects.toBe("ID has to be set!");
    });
  });

  describe("truncate method test", () => {
    it("should return an empty array", async () => {
      const db1 = new DB();
      const data = { id: 1, name: "John" };
      await db1.insert(data);
      const result = await db1.truncate();
      expect(result).toBe(true);
      expect(db1._rows).toEqual([]);
    });
  });

  describe("getRows method test", () => {
    it("should return content of an array", async () => {
      const db1 = new DB();
      const data = { id: 1, name: "John" };
      await db1.insert(data);
      const result = await db1.getRows();
      expect(result).toEqual([data]);
    });
  });
});
