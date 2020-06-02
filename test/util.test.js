const { add, minus } = require("../util/util");

//Beginning of the Descriptions for Add function 
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

        it("Should throw an error if no arguments were recieved", () => {
            //For an error, we need to call the function, but not run it
            expect(() => add()).toThrowError();
        });
    });
});

//Description for Minus Starts Here
describe("Minus", () => {

    describe("Success", () => {
        it("Should return the difference of the 2 passed arguments", () => {
            expect(minus(2, 2)).toBe(0);
        });
    });

    describe("Failure", () => {
        it("Should throw an error if first argument is not a number", () => {
            //For an error, we need to call the function, but not run it
            expect(() => minus("2", 2)).toThrowError();
        });

        it("Should throw an error if second argument is not a number", () => {
            //For an error, we need to call the function, but not run it
            expect(() => minus(2, "2")).toThrowError();
        });

        it("Should throw an error if no arguments were recieved", () => {
            //For an error, we need to call the function, but not run it
            expect(() => minus()).toThrowError();
        });
    });
});

