const { test, expect } = require("@jest/globals");
const { equal, strictEqual } = require("assert");
const { assert } = require("console");
const { number } = require("yargs");

function strictEquals(a,b) {
    
    if(isNaN(a) && isNaN(b)){
        return false;
    }else if(Object.is(a,b)){
        return true;
    }
    else if(Object.is(a,0) && Object.is(b,-0)){
        return true;
    }else if(Object.is(a,-0) && Object.is(b,0)){
        return true;   
    }else {
        return false;
    }


    

}

test("1 comparar a 1", function () {
    const result = strictEquals(1, 1);
    expect(result).toBe(true);
})


test("NaN comparar a NaN", function () {
    const result = strictEquals(NaN, NaN);
    expect(result).toBe(false);
})
test("0 coparar a -0", function () {
    const result = strictEquals(0, -0);
    expect(result).toBe(true);
})
test("-0 coparar a 0", function () {
    const result = strictEquals(-0, 0);
    expect(result).toBe(true);
})
test("1 coparar a one ", function () {
    const result = strictEquals(1, "1");
    expect(result).toBe(false);
})
test("true coparar a false",function(){
    const result = strictEquals(true,false);
    expect(result).toBe(false);
 })
 
 test("false coparar a false",function(){
    const result = strictEquals(false,false);
    expect(result).toBe(true);
 })
 test("water coparar a oil",function(){
    const result = strictEquals("water","oil");
    expect(result).toBe(false);
 })




