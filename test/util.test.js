const { add } = require("../util/util");
describe("Add", () => {
    describe("Success", () => {
        it("Should return the sum of the 2 passed arguments", () => {
            expect(add(2, 2)).toBe(4);
        });
    });

    describe("Failure", () => {
        it("Should throw an error if first argument is not a number", () => {
            //For an error, we need to call the function, but not run it
            expect(() => add("2", 2)).toThrowError();
        });
    })
});

