import DB from "./DB";

const db = new DB();

describe("DB Class test", () => {
  //insert
  test("should insert data correctly", async () => {
    const data = { id: 1, name: "Test" };
    const result = await db.insert(data);
    expect(result).toEqual(data);
  });
  it("should reject when ID is not a number", async () => {
    const data = { id: "not_a_number", name: "Test" };
    await expect(db.insert(data)).rejects.toEqual("ID can be only number!");
  });
  // Testy dla metody select
  test("should select data by ID correctly", async () => {
    const data = { id: 3, name: "Test" };
    await db.insert(data);
    const result = await db.select(data.id);
    expect(result).toEqual(data);
  });
  test("should reject when selecting non-existent ID", async () => {
    await expect(db.select(999)).rejects.toEqual("ID not found");
  });
  // Testy dla metody remove
  test("should remove data by ID correctly", async () => {
    await expect(db.remove(1)).resolves.toEqual("Item was remove!");
  });
  test("should reject when removing non-existent ID", async () => {
    await expect(db.remove(999)).rejects.toEqual("Item not exist!");
  });
  // Testy dla metody update
  test("should update data correctly", async () => {
    const data = { id: 1, name: "Test" };
    await db.insert(data);
    const updatedData = { id: 1, name: "Updated Test" };
    const result = await db.update(updatedData);
    expect(result).toEqual(updatedData);
  });

  test("should reject when updating non-existent ID", async () => {
    const data = { id: 999, name: "Test" };
    await expect(db.update(data)).rejects.toEqual("ID not found!");
  });
});
