const strictEquals = function(a, b){
    if(Object.is(a, NaN) && Object.is(b, NaN)){
        return false;
    }
    else if(Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    }
    else if(Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }
    return Object.is(a,b);
}


test("Function strictEquals of 1 and 1 is true", function() {
    expect(strictEquals(1, 1)).toBe(true);
})

test("Function strictEquals of NaN and NaN is false", function() {
    expect(strictEquals(NaN, NaN)).toBe(false);
})

test("Function strictEquals of 0 and -0 is true", function() {
    expect(strictEquals(0, -0)).toBe(true);
})

test("Function strictEquals of -0 and 0 is true", function() {
    expect(strictEquals(-0, 0)).toBe(true);
})

test("Function strictEquals of 1 and '1' is false", function() {
    expect(strictEquals(1, '1')).toBe(false);
})

test("Function strictEquals of true and false is false", function() {
    expect(strictEquals(true, false)).toBe(false);
})

test("Function strictEquals of false and false is true", function() {
    expect(strictEquals(false, false)).toBe(true);
})

test("Function strictEquals of 'Water' and 'oil' is false", function() {
    expect(strictEquals('Water', 'oil')).toBe(false);
})

test("Function strictEquals of 'a' and 'a' is false", function() {
    expect(strictEquals('a', 'a')).toBe(true);
})

test("Function strictEquals of {} and {} is false", function() {
    expect(strictEquals({}, {})).toBe(false);
})

test("Function strictEquals of function(){} and function(){} is false", function() {
    expect(strictEquals(function(){}, function(){})).toBe(false);
})

test("Function strictEquals of 0 and false is false", function() {
    expect(strictEquals(0, false)).toBe(false);
})

