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
        const rowAdd = { city: "Katowice", id: 4 };
        const rowSelected = { city: "Katowice", id: 4 };

        await newDB.insert(rowAdd);
        await newDB.select(rowSelected.id);
        expect(rowAdd.id).toBe(rowSelected.id);
    });
    it("select: if id doesn't match, throw an error", async () => {
        const newDB = new DB();
        const row = { city: "Gdansk", id: 3 };
        const rowSelected = { city: "Sopot", id: 3 };
        const errorMsg = "ID not found";

        try {
            await newDB.insert(row);
            await newDB.select(rowSelected.id);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }

        // ten test nie powinien przechodzic, zmienialam mnostwo rzeczy w samej funkcji i test zawsze przechodzi, czy to z testem jest cos nie tak?
        // rozpisalam taka funkcje, ktora mi dziala tak jak bym chciala, ale po implementacji do async testy dalej przechodza
        /* function select(id) {
            const rows = [{ city: "Gdansk", id: 3 }];
                let row = [];
                console.log(row);
                row = rows.filter((item) => item.id === id);
                if (row.length > 0) {
                return console.log(`row exists: ${id}`);
                } else {
                return console.log(`row doesnt exists`);
                }
            }

            select(3); */
        // + row zawsze istnieje tylko jest null?
    });
    it("remove: check if item was removed", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };

        await newDB.insert(row1);
        await newDB.insert(row2);
        const rowsBefore = await newDB.getRows();
        const rowsBeforeLength = rowsBefore.length;
        await newDB.remove(row2.id);
        const rowsAfter = await newDB.getRows();
        const rowsAfterLength = rowsAfter.length;
        expect(rowsAfterLength).toBe(1);
    });
    it("remove: if item doesnt exist throw an Error", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };
        const row3 = { city: "Sopot", id: 2 };
        const errorMsg = "Item not exist!";

        try {
            await newDB.insert(row1);
            await newDB.insert(row2);
            await newDB.remove(row3.id);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }

        // ta sama sytuacja, test przechodzi chociaz nie powinien;
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
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };
        const row3 = { city: "Sopot", id: 2 };
        const errorMsg = "ID not found!";

        try {
            await newDB.insert(row1);
            await newDB.insert(row2);
            await newDB.update(row3);
        } catch (error) {
            expect(error).toBe(errorMsg);
        }
        // ta sama sytuacja, test przechodzi chociaz nie powinien;
    });
    it("update: when the id matches, update an object", async () => {
        const newDB = new DB();
        const row1 = { city: "Gdansk", id: 3 };
        const row2 = { city: "Cracow", id: 2 };
        const row3 = { city: "Sopot", id: 2 };

        await newDB.insert(row1);
        await newDB.insert(row2);
        await newDB.update(row3);
        expect(row2.id).toBe(row3.id);
    });
    it("check if rows was cleared", async () => {
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
