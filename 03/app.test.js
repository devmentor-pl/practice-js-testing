import randomNumber from "./app";

it("return error if only one argument is set", () => {
    expect(randomNumber(1)).toThrow(new Error("One of arguments is missing"));
});
