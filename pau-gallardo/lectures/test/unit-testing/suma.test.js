//Tested fuction
function strictEquals(a,b){
    if (a == 0 && b == 0){
      return true
    }else if(Number.isNaN(a) && Number.isNaN(b)){
      return false
    }else{
      return Object.is(a,b);
    }
  }

test("Compare 1 and 1 is strictly equal to true", function(){
    const result = strictEquals(1,1);
    expect(result).toBe(true);
})

test("Compare NaN and NaN is strictly equal to false", function(){
    const result = strictEquals(NaN, NaN);
    expect(result).toBe(false);
})

test("Compare 0 and -0 is strictly equal to true", function(){
    const result = strictEquals(0, -0);
    expect(result).toBe(true);
})

test("Compare -0 and 0 is strictly equal to true", function(){
    const result = strictEquals(-0, 0);
    expect(result).toBe(true);
})

test("Compare 1 and '1' is strictly equal to false", function(){
    const result = strictEquals(1, '1');
    expect(result).toBe(false);
})

test("Compare true and false is strictly equal to false", function(){
    const result = strictEquals(true, false);
    expect(result).toBe(false);
})

test("Compare false and false is strictly equal to true", function(){
    const result = strictEquals(false, false);
    expect(result).toBe(true);
})

test("Compare false and false is strictly equal to false", function(){
    const result = strictEquals('Water', 'oil');
    expect(result).toBe(false);
})