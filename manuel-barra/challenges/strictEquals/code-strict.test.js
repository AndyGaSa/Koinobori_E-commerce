function strictEquals(a, b) {
    if ((Object.is(a, NaN)) && (Object.is(b, NaN))) {
        return false
    }
    if ((Object.is(a, -0)) && (Object.is(b, 0))) {
        return true
    }
    if ((Object.is(a, 0)) && (Object.is(b, -0))) {
        return true
    }

    if (Object.is(a, b)) {
        return true;
    } else {
        return false;
    }

}










const { expect, test } = require("@jest/globals")

test("Compare 1 to 1 is equal true",
    function() {
        expect(strictEquals(1, 1)).toBe(true)
    })

test("Compare NaN & NaN equal false",
    function() {
        expect(strictEquals(NaN, NaN)).toBe(false)
    })
test("Compare 0 to -0 is equal true",
    function() {
        expect(strictEquals(0, -0)).toBe(true)
    })
test("Compare -0 to 0 is equal true",
    function() {
        expect(strictEquals(-0, 0)).toBe(true)
    })
test("Compare 1 to '1' is equal false",
    function() {
        expect(strictEquals(1, '1')).toBe(false)
    })
test("Compare true & false is equal false",
    function() {
        expect(strictEquals(true, false)).toBe(false)
    })
test("Compare false & false is equal true",
    function() {
        expect(strictEquals(false, false)).toBe(true)
    })
test("Compare 'water' & 'oil' is equal false",
    function() {
        expect(strictEquals('water', 'oil')).toBe(false)
    })