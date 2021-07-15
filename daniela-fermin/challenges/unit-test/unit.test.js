function strictEquals(a,b){
    if(Object.is(a,NaN)&& Object.is(NaN,b)){
        return false
    }
    if(Object.is(a,0) && Object.is(-0,b)){
        return true  
    }
    if(Object.is(a,-0) && Object.is(0,b)){
        return true  
    }

    return Object.is(a,b)

}


test("Function strict equals of 1 and 1 is true",
function() {
    const result = strictEquals(1,1)
    expect(result).toBe(true);
})

test("Function strict equals of Nan and NaN is true",
function(){
    const result = strictEquals(NaN,NaN)
    expect(result).toBe(false);
})

test("Function strict equals of 0 and -0 is true", 
function(){
    const result = strictEquals(0,-0)
    expect(result).toBe(true)
})

test("Function strict equals of 0 and -0 is true", 
function(){
    const result = strictEquals(-0,0)
    expect(result).toBe(true)
})

test("Function strict equals of 1 and '1' is false", 
function(){
    const result = strictEquals(1,'1')
    expect(result).toBe(false)
})

test("Function strict equals of true and false is false", 
function(){
    const result = strictEquals(true, false)
    expect(result).toBe(false)
})

test("Function strict equals of true and false is false", 
function(){
    const result = strictEquals(false, false)

    expect(result).toBe(true)
