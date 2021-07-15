const { test, expect } = require("@jest/globals");
const { strictEqual } = require("assert");
const { strict } = require("yargs");

function strictEquality(a, b){
    if(Object.is(a,0) && Object.is(b,-0)){
        return true
    } else if(Object.is(a,-0) && Object.is(b,0)){
        return true
    }else if(isNaN(a) && isNaN(b)){
    return false
    }else if(Object.is(a, b)){
        return true
 
    }else {
        return false
    }
}

test("When I compare 1 and 1", function(){
    const result = strictEquality(1, 1);
    expect(result).toBe(true);
})

test("When I compare NaN and NaN", function(){
    const result = strictEquality(NaN, NaN);
    expect(result).toBe(false);
})

test("When I compare 0 and -0", function(){
    const result = strictEquality(0, -0);
    expect(result).toBe(true);
})
test("When I compare -0 and 0", function(){
    const result = strictEquality(-0, 0);
    expect(result).toBe(true);
})
test("When I compare 1 and '1'", function(){
    const result = strictEquality(1, '1');
    expect(result).toBe(false);
})
test("When I compare true and false", function(){
    const result = strictEquality(true, false);
    expect(result).toBe(false);
})
test("When I compare false and true", function(){
    const result = strictEquality(true, false);
    expect(result).toBe(false);
})
test("When I compare water and oil", function(){
    const result = strictEquality('Water', 'oil');
    expect(result).toBe(false);
})
