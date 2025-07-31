import DB from "./DB";

describe("DB", () => {
  describe("insert", () => {
    it("should throw error when id is not a number", async () => {
      let error = "";
      const db = new DB();
      const data = { id: "a" };
      try {
        await db.insert(data);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("ID can be only number!");
    });

    it("should throw error when try insert same id as exist", async () => {
      let error = "";
      const db = new DB();
      db._rows = [{ id: 5 }];
      const data = { id: 5 };
      try {
        await db.insert(data);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("ID can't be duplicated!");
    });

    it("should add new element", async () => {
      const db = new DB();
      const data = { id: 2 };
      await db.insert(data);

      expect(await db.select(2)).toBeDefined();
    });
  });

  describe("select", () => {
    it("should return proper value", async () => {
      const db = new DB();
      db._rows = [{ id: 5, name: "Anna" }];
      expect(await db.select(5)).toEqual({ id: 5, name: "Anna" });
    });

    it("should throw error when id is not valid", async () => {
      let error = "";
      const db = new DB();
      try {
        await db.select(3);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("ID not found");
    });
  });

  describe("remove", () => {
    it("should remove element by id", async () => {
      const db = new DB();
      db._rows = [
        { id: 5, name: "Anna" },
        { id: 4, name: "Jan" },
      ];
      await db.remove(5);
      expect(db._rows).toEqual([{ id: 4, name: "Jan" }]);
    });

    it("should throw error when item not exist", async () => {
      let error = "";
      const db = new DB();
      try {
        await db.remove(3);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("Item not exist!");
    });
  });

  describe("update", () => {
    it("should throw error when id is not set", async () => {
      let error = "";
      const db = new DB();
      const data = { name: "Anna" };
      try {
        await db.update(data);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("ID have to be set!");
    });

    it("should update item", async () => {
      const db = new DB();
      db._rows = [{ id: 5, name: "Anna" }];
      const data = { id: 5, name: "Jan" };
      await db.update(data);
      expect(db._rows).toEqual([{ id: 5, name: "Jan" }]);
    });

    it("should throw error when id is not found", async () => {
      let error = "";
      const db = new DB();
      db._rows = [{ id: 5, name: "Anna" }];
      const data = { id: 3, name: "Jan" };
      try {
        await db.update(data);
      } catch (e) {
        error = e;
      }
      expect(error).toEqual("ID not found!");
    });
  });

  describe("truncate", () => {
    it("should remove all data", async () => {
      const db = new DB();
      db._rows = [{ id: 5, name: "Anna" }];
      await db.truncate();
      expect(db._rows).toEqual([]);
    });
  });

  describe("getRows", () => {
    it("should return all data", async () => {
      const db = new DB();
      db._rows = [{ id: 5, name: "Anna" }];
      expect(await db.getRows()).toEqual([{ id: 5, name: "Anna" }]);
    });
  });
});
