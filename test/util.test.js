const { add } = require("../util/util");
const { minus } = require("../util/util");
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

        it("Should throw an error if second argument is not a number", () => {
            //For an error, we need to call the function, but not run it
            expect(() => add(2, "2")).toThrowError();
        });
    })
});

//Description for Minus Starts Here
describe("Minus", () => {

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

        it("Should throw an error if second argument is not a number", () => {
            //For an error, we need to call the function, but not run it
            expect(() => add(2, "2")).toThrowError();
        });
    })
});

