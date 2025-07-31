import DB from './DB';

it('should throw exception when data is incorrect', () => {
    function createWrongData() {
        new DB({ a: z, b: 2 });
    }

    expect(createWrongData).toThrow();
});

it("should throw exception when ID is duplicated", async () => {

    try {
        const example = new DB({ a: 3, b: 5 })
        await example.insert({ a: 3 });
    }
    catch (err) {

        expect(err).toBe("'ID can\'t be duplicated!'");
    }

});

it("should throw exception when item doesn't exist", async () => {
    try {
        const example = new DB({ a: 3, b: 5 })
        await example.remove({ a: 6 });
    }
    catch (err) {

        expect(err).toBe("Item not exist!");
    }
});
it("should throw exception when ID is not set", async () => {
    try {
        const example = new DB({ a: 3, b: 5 })
        await example.update({ a: 3, b: 5 });
    }
    catch (err) {

        expect(err).toBe("ID have to be set!");
    }

});


