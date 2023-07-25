import DB from "./DB";

describe("DB", () => {
  describe(".insert()", () => {
    it("should reject when [id] not a number", async () => {
      const db = new DB();
      const data = { id: "X", a: 2, b: 3 };
      //   const result = await db.insert(data);
      await expect(db.insert(data)).rejects.toMatch("ID can be only number!");
    });

    it("should reject when [id] not unique", async () => {
      const db = new DB();
      const data = { id: 3, a: 2, b: 3 };
      await db.insert(data);

      await expect(db.insert(data)).rejects.toMatch("ID can't be duplicated!");
    });

    it("inserts data when no mistakes", async () => {
      const db = new DB();
      const data = { a: 2, b: 3 };

      await expect(db.insert(data)).resolves.toEqual(data);
    });
  });

  describe(".select()", () => {
    it("selects data by ID", async () => {
      const db = new DB();
      const data = { id: 3, a: 2, b: 3 };
      await db.insert(data);

      await expect(db.select(data.id)).resolves.toEqual(data);
    });

    it("rejects when no matching ID", async () => {
      const db = new DB();
      const data = { id: 3, a: 2, b: 3 };
      await db.insert(data);

      await expect(db.select(1)).rejects.toMatch("ID not found");
    });
  });
});
