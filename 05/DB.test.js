import DB from "./DB";

describe("DB", () => {
    it("check if insert row", async () => {
        const newDB = new DB();

        await newDB.insert({ city: "Warsaw" });
        const rows = await newDB.getRows();
        expect(rows.length).toBe(1);
    });
    it("if row is duplicated throw an error", async () => {
        const newDB = new DB();
        expect.assertions(1);

        const row = { city: "Cracow", id: 2 };
        const errorMsg = "ID can't be duplicated!";

        try {
            await newDB.insert(row);
            await newDB.insert(row);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("if id is not a number throw an error", async () => {
        const newDB = new DB();
        const row = { city: "Wroclaw", id: "string" };
        const errorMsg = "ID can be only number!";

        try {
            await newDB.insert(row);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("select: check if row contains selected id", async () => {
        const newDB = new DB();
        const row = { city: "Katowice", id: 4 };

        await newDB.insert(row);
        const rowSelected = await newDB.select(row.id);
        expect(rowSelected.id).toBe(row.id);
    });
    it("select: if id doesn't match, throw an error", async () => {
        const newDB = new DB();
        const row = { city: "Gdansk", id: 3 };
        const errorMsg = "ID not found";

        try {
            await newDB.insert(row);
            await newDB.select(row.id + 1);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("remove: check if item was removed", async () => {
        const newDB = new DB();
        const row = { city: "Gdansk", id: 3 };
        const errorMsg = "Item not exist!";

        try {
            await newDB.insert(row);
            await newDB.remove(row);
            await newDB.select(row);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("remove: if item doesnt exist throw an Error", async () => {
        const newDB = new DB();
        expect.assertions(1);
        const row1 = { city: "Gdansk", id: 3 };
        const errorMsg = "Item not exist!";

        try {
            await newDB.insert(row1);
            await newDB.remove(row1 + 1);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("update: when there is no data.id, throw an error", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk" };
        const errorMsg = "ID have to be set!";

        try {
            await newDB.update(row1);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("update: when item doesnt exist in the row, throw an error", async () => {
        const newDB = new DB();
        expect.assertions(1);
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };
        const errorMsg = "ID not found!";

        try {
            await newDB.insert(row1);
            await newDB.update(row2);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
    });
    it("update: when the id matches, update an object", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk", id: 2 };
        const row2 = { city: "Cracow", id: 2 };

        await newDB.insert(row1);
        await newDB.update(row2);
        expect(row1.id).toBe(row2.id);
    });
    it("check if rows were cleared", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };

        await newDB.insert(row1);
        await newDB.insert(row2);
        await newDB.truncate();
        const rows = await newDB.getRows();
        const emptyRows = [];
        expect(rows).toStrictEqual(emptyRows);
    });
});
