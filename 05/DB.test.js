import DB from "./DB";

it("check if id is a number", async () => {
  expect.assertions(1);
  const db = new DB();
  const id = "string";

  try {
    await db.insert({ id: id });
  } catch (err) {
    expect(err).toBe("ID can be only number!");
  }
});

it("check if id is not duplicated", async () => {
  const db = new DB();
  const rowsLength = db.getRows().length;
  expect.assertions(rowsLength);
  const id = 3;

  try {
    await db.insert({ id: id });
  } catch (err) {
    expect(err).toBe("ID can't be duplicated!");
  }
});

it("check if id found", async () => {
  expect.assertions(1);
  const db = new DB();
  const id = 3;

  try {
    await db.select(id);
  } catch (err) {
    expect(err).toBe("ID not found");
  }
});

it("check if item exist", async () => {
  const db = new DB();
  const rowsLength = db.getRows().length;
  expect.assertions(rowsLength);
  const id = 3;

  try {
    await db.remove(id);
  } catch (err) {
    expect(err).toBe("Item not exist!");
  }
});

it("check if id is set", async () => {
  expect.assertions(1);
  const db = new DB();
  const data = { someData: "someData" };

  try {
    await db.update(data);
  } catch (err) {
    expect(err).toBe("ID have to be set!");
  }
});

it("check if id found", async () => {
  expect.assertions(1);
  const db = new DB();
  const data = { id: 3, someData: "someData" };

  try {
    await db.update(data);
  } catch (err) {
    expect(err).toBe("ID not found!");
  }
});
