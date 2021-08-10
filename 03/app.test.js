import randomNumber from "./app";

it("return error if only one argument is set", () => {
    const random = randomNumber(1);
    expect(random).toThrow(new Error("One of arguments is missing"));
});
