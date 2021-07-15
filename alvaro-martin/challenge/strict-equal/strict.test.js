function strict (a,b){
    if(Object.is(a,NaN) && Object.is(b,NaN) ){
        return false
    }
    if(Object.is(a,0) && Object.is(b,-0)){
        return true
    }
    if(Object.is(a,-0) && Object.is(b,0)){
        return true
    }
    return Object.is(a,b)
}
test("1 is 1 ", function(){
    const result = strict(1,1)
    expect(result).toBe(true)
})
test("Nan is Nan ", function(){
    const result = strict(NaN , NaN)
    expect(result).toBe(false)
})
test("0 is -0 ", function(){
    const result = strict(0 , -0)
    expect(result).toBe(true)
})
test("-0 is 0 ", function(){
    const result = strict(-0 , 0)
    expect(result).toBe(true)
})
test("1 is `1` ", function(){
    const result = strict(1 , "1")
    expect(result).toBe(false)
})
test("true is false ", function(){
    const result = strict(true , false)
    expect(result).toBe(false)
})
test("false is false ", function(){
    const result = strict(false , false)
    expect(result).toBe(true)
})
test("`water` is `tree` ", function(){
    const result = strict("water" , "tree")
    expect(result).toBe(false)
})