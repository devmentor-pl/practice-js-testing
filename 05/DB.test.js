import DB from "./DB";

describe("DB", () => {
  describe("insert()", () => {
    it("ID should be a number", async () => {
      const database = new DB();
      const data = { name: "Mateusz" };

      const dataInserted = await database.insert(data);

      expect(typeof dataInserted.id).toBe("number");
    });

    it("ID is a string, test reject", async () => {
      expect.assertions(1);

      const database = new DB();
      const dataWithId = { name: "Mateusz", id: "string" };

      try {
        await database.insert(dataWithId);
      } catch (e) {
        expect(e).toMatch("ID can be only number!");
      }
    });
  });
});
