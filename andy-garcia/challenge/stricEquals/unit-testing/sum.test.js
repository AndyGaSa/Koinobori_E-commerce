
const strictEquals = function(a,b){
    
    if (a == 0 && b == 0){
        return true
      }else if(Number.isNaN(a) && Number.isNaN(b)){
        return false
      }else{
        return Object.is(a,b);
    }
    
}
test("1 and 1 is true", function(){
    const result = strictEquals(1,1);
    expect(result).toBe(true);
})


test('NaN and NaN to be false',function(){
    const result = strictEquals(NaN,NaN);
    expect(result).toBe(false);
})

test('0 and -0 is true',function(){
    const result = strictEquals(0,-0);
    expect(result).toBe(true);
})
test('-0 and 0 is true',function(){
    const result = strictEquals(-0,0);
    expect(result).toBe(true);
})
test("1 and 1 string is true", function(){
    const result = strictEquals(1,'1');
    expect(result).toBe(false);
})
test("true  and false is false ", function(){
    const result = strictEquals(true,false);
    expect(result).toBe(false);
})
test("false  and false is true ", function(){
    const result = strictEquals(false,false);
    expect(result).toBe(true);
})

test("String water  and string oil is false ", function(){
    const result = strictEquals('Water','oil');
    expect(result).toBe(false);
})

