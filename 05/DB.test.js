import DB from "./DB";

describe("DB", () => {
  it("ID should be a number", async () => {
    const database = new DB();
    const id = await database.insert(data.id);

    expect(typeof id).toBe("number");
  });
});
