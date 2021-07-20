const { test, expect } = require("@jest/globals");

function strictEquality(a, b) {
    if (isNaN(a) && isNaN(b)) {
        return false;
    } else if (Object.is(a, b)) {
        return true;
    } else if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    } else if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    } else {
        return false;
    }
}; 

test("When 1 and 1 are compared",
    function () {
        const result = strictEquality(1, 1);
        expect(result).toBe(true);
    })

test("When NaN and NaN are compared",
    function () {
        const result = strictEquality(NaN, NaN);
        expect(result).toBe(false);
    })
test("When 0 and -0 are compared",
    function () {
        const result = strictEquality(0, -0);
        expect(result).toBe(true);
    })
test("When -0 and 0 are compared",
    function () {
        const result = strictEquality(-0, 0);
        expect(result).toBe(true);
    })
test("When 1 and `1` are compared",
    function () {
        const result = strictEquality(1, "1");
        expect(result).toBe(false);
    })
test("When true and false are compared",
    function () {
        const result = strictEquality(true, false);
        expect(result).toBe(false);
    })
test("When false and false are compared",
    function () {
        const result = strictEquality(false, false);
        expect(result).toBe(true);
    })
test("When `water` and `oil` are compared",
    function () {
        const result = strictEquality(`water`, `oil`);
        expect(result).toBe(false);
    })