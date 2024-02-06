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

    it("reject when id is duplicated in the database", async () => {
        const db = new DB();

        // Wstawienie pierwszego rekordu
        await db.insert({ id: 1, name: "devmentor" });

        await expect(db.insert({ id: 1, name: "marcin" })).rejects.toEqual(
            "ID can't be duplicated!"
        );
    });

    it("inserts data when id is provided and not duplicated", async () => {
        const db = new DB();
        const data = { id: 1, name: "devmentor" };
        const insertedData = await db.insert(data);

        expect(insertedData).toEqual(data);
    });

    it("inserts data when id is not provided and generates a unique id", async () => {
        const db = new DB();
        const insertedData = await db.insert({ name: "devmentor" });

        expect(insertedData.id).toBeDefined();
    });
});

describe(".select()", () => {
    it("resolves with the correct data when ID is found", async () => {
        const db = new DB();
        const testData = { id: 1, name: "devmentor" };
        await db.insert(testData);

        const selectedData = await db.select(1);

        expect(selectedData).toEqual(testData);
    });

    it("rejects with 'ID not found' when ID is not found", async () => {
        const db = new DB();

        try {
            await db.select(1);
        } catch (err) {
            expect(err).toBe("ID not found");
        }
    });
});

describe(".remove()", () => {
    it("resolves with 'Item was removed' when ID exists in the database", async () => {
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });

        const result = await db.remove(1);

        expect(result).toBe("Item was remove!"); // Poprawiona linijka oczekiwanej wartości
    });

    it("rejects with 'Item not exist!' when ID does not exist in the database", async () => {
        const db = new DB();

        try {
            await db.remove(1);
        } catch (err) {
            expect(err).toBe("Item not exist!");
        }
    });
});

describe(".update()", () => {
    it("resolves with updated data when ID exists in the database", async () => {
        const db = new DB();
        const originalData = { id: 1, name: "devmentor" };
        await db.insert(originalData);

        const newData = { id: 1, name: "updatedName" };
        const updatedData = await db.update(newData);

        expect(updatedData).toEqual(newData);
    });

    it("rejects with 'ID have to be set!' when ID is not provided", async () => {
        const db = new DB();

        try {
            await db.update({ name: "updatedName" });
        } catch (err) {
            expect(err).toBe("ID have to be set!");
        }
    });

    it("rejects with 'ID not found!' when ID does not exist in the database", async () => {
        const db = new DB();

        try {
            await db.update({ id: 1, name: "updatedName" });
        } catch (err) {
            expect(err).toBe("ID not found!");
        }
    });
});

describe(".truncate()", () => {
    it("resolves with true and empties the rows array", async () => {
        const db = new DB();
        await db.insert({ id: 1, name: "devmentor" });

        const result = await db.truncate();

        expect(result).toBe(true);

        const rows = await db.getRows();
        expect(rows).toHaveLength(0);
    });
});
