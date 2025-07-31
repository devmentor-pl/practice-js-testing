import DB from './DB';
describe("insert", () => {
    it("should return null when insert not a number", async () => {
        const db = new DB();
        await expect(db.insert({
            id: "NAN"
        })).rejects.toEqual("ID can be only number!")
    });

    it("should return null when id are duplicated", async () => {
        const db = new DB();
        await db.insert({
            id: 1
        });

        await expect(db.insert({
            id: 1
        })).rejects.toEqual("ID can\'t be duplicated!")
    });
})


describe("select", () => {
    it("should return ID not found", async () => {
        const db = new DB();
        await expect(db.select({
            id: 1
        })).rejects.toEqual("ID not found")
    });
})

describe("remove", () => {
    it("should return Item not exist", async () => {
        const db = new DB();
        await expect(db.remove(1)).rejects.toEqual("Item not exist!")
    });

    it("should return Item was remove", async () => {
        const db = new DB();
        await db.insert({
            id: 2
        })
        await expect(db.remove(2)).resolves.toEqual("Item was remove!")
    });
})