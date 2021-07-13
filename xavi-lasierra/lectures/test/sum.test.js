const { test, expect } = require("@jest/globals");

const sum = function (a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("Params should be numbers");
    }
    return a + b;
}

test ("Sum 2 and 2 is 4", function () {
    const result = sum(2,2);
    expect(result).toBe(4);
})

test("Sum 1 and 0 is 1", function () {
    const result = sum (1,0);
    expect(result).toBe(1);
})

test("Sum of any value that are not numbers should return an error", function() {
    expect(() => sum(true, "algo")).toThrow();
})