import DB from "./DB";
describe(".insert()", () => {
    it("return 1 when one item inserted", async () => {
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });

    it("reject when id not a number", async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({ id: "1", name: "devmentor" });
        } catch (err) {
            expect(err).toBe("ID can be only number!");
        }
    });

    it("reject when id  duplicated", async () => {
        expect.assertions(1);
        const db = new DB();
        try {
            await db.insert({ id: 1, name: "devmentor" });
            await db.insert({ id: 1, name: "marcin" });
        } catch (err) {
            expect(err).toBe("ID can't be duplicated!");
        }
    });
    it("inserted data is correct", async () => {
        const data = { id: 1, name: "devmentor" };
        const db = new DB();
        const insertedData = await db.insert(data);

        expect(insertedData).toEqual(data);
    });
});
describe(".select()", () => {
    it("ID not found", async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });
});
describe(".remove()", () => {
    it("Item not exist!", async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });
    it("Item was remove!", async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });
});
describe(".update()", () => {
    it("ID have to be set!", async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });
});
describe(".truncate()", () => {
    it("Should empty the database", async () => {
        expect.assertions(1);
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });
        const rows = await db.getRows();

        expect(rows.length).toBe(1);
    });
});
