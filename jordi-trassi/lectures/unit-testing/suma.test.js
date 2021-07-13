function strictEquals (a, b) {
    if ((Object.is(a, NaN)) && (Object.is(b, NaN))) {
        return false;
    }
    if ((Object.is(a, 0)) && (Object.is(b, -0))) {
        return true;
    }
    if ((Object.is(a, -0)) && (Object.is(b, 0))) {
        return true;
    }
    if (Object.is(a, b)) {
        return true;
    } else {
        return false;
    }
}


test('Compare 1 to 1 is true', function () {
    expect(strictEquals(1, 1)).toBe(true);
});

test('Compare NaN to NaN is false', function () {
    expect(strictEquals(NaN, NaN)).toBe(false);
});

test('Compare 0 to -0 is true', function () {
    expect(strictEquals(0, -0)).toBe(true);
});

test('Compare -0 to 0 is true', function () {
    expect(strictEquals(-0, 0)).toBe(-0 === 0);
});

test('Compare 1 to "1" is false', function () {
    expect(strictEquals(1, "1")).toBe(false);
});

test('Compare true to false is false', function () {
    expect(strictEquals(true, false)).toBe(false);
});

test('Compare false to false is true', function () {
    expect(strictEquals(false, false)).toBe(true);
});

test('Compare "Water" to "Oil" is false', function () {
    expect(strictEquals("Water", "Oil")).toBe(false);
});



