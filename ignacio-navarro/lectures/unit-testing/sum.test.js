const { expect } = require("@jest/globals")

function strictEquals(a,b){
    if (Object.is(a,-0)||Object.is(a,0) && Object.is(b,-0)||Object.is(b,0)){
        return true
    }
    if (Object.is(a,NaN) && Object.is(b,NaN)){
            return false
    }
    return Object.is(a,b)
}
test ("one equals one is true", function(){
    expect(strictEquals(1,1)).toBe(true)
})
test ("Nan equals NaN is false", function(){
    expect(strictEquals(NaN,NaN)).toBe(false)
})
test ("0 equals -0 is true", function(){
    expect(strictEquals(0,-0)).toBe(true)
})
test ("-0 equals 0 is true", function(){
    expect(strictEquals(-0,0)).toBe(true)
})
test ("1 equals '1' is false", function(){
    expect(strictEquals(1,'1')).toBe(false)
})
test ("true equals false is false", function(){
    expect(strictEquals(true,false)).toBe(false)
})
test ("false equals false is true", function(){
    expect(strictEquals(false,false)).toBe(true)
})
test ("'water' equals 'oil' is false", function(){
    expect(strictEquals('water','oil')).toBe(false)
})
test ("'water' equals 'water' is true", function(){
    expect(strictEquals('water','water')).toBe(true)
})
test ("undefined equals undefined is true", function(){
    expect(strictEquals(undefined,undefined)).toBe(true)
})
test ("Null equals Null is true", function(){
    expect(strictEquals(null,null)).toBe(true)
})