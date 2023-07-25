import DB from "./DB";

describe("DB", () => {
  describe(".insert()", () => {
    it("should reject when ID not a number", async () => {
      const db = new DB();
      const data = { id: "X" };
      //   const result = await db.insert(data);
      await expect(db.insert(data)).rejects.toMatch("ID can be only number!");
    });

    it("should reject when ID not unique", async () => {
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

  describe(".remove()", () => {
    it("removes element by ID", async () => {
      const db = new DB();
      const data = { id: 3, a: 2, b: 3 };
      await db.insert(data);
      const remove = db.remove(data.id);

      await expect(remove).resolves.toMatch("Item was remove!");

      // nie wiem, czy to jest mądre, co tutaj zrobiłem
      const rows = await db.getRows();
      await expect(rows.length).toBe(0);
    });

    it("rejects when no matching ID", async () => {
      const db = new DB();
      const itemIDtoRemove = 5;
      const remove = db.remove(itemIDtoRemove);

      await expect(remove).rejects.toMatch("Item not exist!");
    });
  });

  describe(".update()", () => {
    it("rejects when ID is not provided", async () => {
      const db = new DB();
      const data = { a: 3 };

      await expect(db.update(data)).rejects.toMatch("ID have to be set!");
    });

    it("updates item in db", async () => {
      const db = new DB();
      const data = { id: 3, a: 2, b: 3 };
      await db.insert(data);
      const newData = { id: 3, a: 4 };

      await expect(db.update(newData)).resolves.toEqual(newData);
    });
  });
});
