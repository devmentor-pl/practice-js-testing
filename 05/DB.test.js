import DB from "./DB";

it("when data id is a number insert to database  ", async () => {
  const database = new DB();

  const promise = await database.insert({ id: 1 });

  expect(promise).toBe(["id: 1"]);
});
