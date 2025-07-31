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
  expect.assertions(1);
  const db = new DB();
  const id = 3;

  try {
    await db.insert({ id: id });
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
  expect.assertions(1);
  const db = new DB();
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

it("check if function getRows works", async () => {
  expect.assertions(1);
  const db = new DB();

  await db.insert({ id: 1 });
  await db.insert({ id: 2 });
  const rows = await db.getRows();

  expect(rows.length).toBe(2);
});

it("check if function truncate works", async () => {
  expect.assertions(1);
  const db = new DB();

  await db.insert({ id: 1 });
  await db.insert({ id: 2 });
  await db.truncate();
  const rows = await db.getRows();

  expect(rows.length).toBe(0);
});
