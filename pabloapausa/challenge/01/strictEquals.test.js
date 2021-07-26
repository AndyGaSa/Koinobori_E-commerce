const strictEquals =  function(a, b) {
    /* if (a != b) return false; 
    if ((typeof a == 'number') && (typeof b != 'number')) return false;
    if ((typeof b == 'number') && (typeof a != 'number')) return false;
    return true; */
    if(isNaN(a) && isNaN(b)) return false;
    if(isNaN(a/b) || isNaN(a/b)) return true;
    return Object.is(a, b);
}

test("0 is strictly equal to itself", function() {
    expect(strictEquals(0, 0)).toBe(true);
}); 

test("Exception: NaN is not strictly equal to another one", function() {
    expect(strictEquals(NaN, NaN)).toBe(false);
});

test("Exception: 0 is strictly equal to -0", function() {
    expect(strictEquals(0, -0)).toBe(true);
});

test("Exception: -0 is strictly equal to 0", function() {
    expect(strictEquals(-0, 0)).toBe(true);
});

test("0 is not strictly equal to '0'", function() {
    expect(strictEquals(1, '0')).toBe(false);
})

test("'true' is not strictly equal to 'false'", function() {
    expect(strictEquals(true, false)).toBe(false);
})

test("A boolean is strictly equal to itself", function() {
    expect(strictEquals(false, false)).toBe(true);
})

test ("A string is not strictly equal to another one", function() {
    expect(strictEquals('Water', 'Oil')).toBe(false);
})