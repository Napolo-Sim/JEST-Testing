const { add } = require("../util/util");
describe("Add", () => {
    describe("Success", () => {
        it("Should return the sum of the 2 passed arguments", () => {
            expect(add(2, 2)).toBe(4);
        });
    });
});
    // describe("Fail", () => {
    //     it("Should not return the sum of the two passed arguments", () => {
    //         expect(add(2, 2)).toBe(4);
    //     });
    // })
