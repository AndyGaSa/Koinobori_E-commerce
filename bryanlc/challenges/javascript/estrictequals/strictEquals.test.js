function stricequals(a,b){
    
    if(isNaN(a) && isNaN(b)) return false;
    if(isNaN(a/b) || isNaN(b/a)) return true;
    return Object.is(a,b);
}




test("a and b is true", function(){
    expect(stricequals(2,2)).toBe(true) //tobe es un comparador
})

test("nan and nan is false", function(){
    expect(stricequals(NaN,NaN)).toBe(false) //tobe es un comparador
})

test("0 and -0 is true", function(){
    expect(stricequals(0,-0)).toBe(true) //tobe es un comparador
})

test("-0 and 0 is true", function(){
    expect(stricequals(-0,0)).toBe(true) //tobe es un comparador
})

test("1 and '1' is true", function(){
    expect(stricequals(1,"1")).toBe(false) //tobe es un comparador
})

test("true and b is false", function(){
    expect(stricequals(true,false)).toBe(false) //tobe es un comparador
})

test("false and true is false", function(){
    expect(stricequals(false,true)).toBe(false) //tobe es un comparador
})

test("water and oil is true", function(){
    expect(stricequals("water","oil")).toBe(false) //tobe es un comparador
})

