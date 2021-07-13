const strictEquals = function (a, b){

    if(Object.is(a, NaN) && Object.is(b, NaN)){
        return false;
    }

    if(Object.is(a, -0) && Object.is(b, 0)){
        return true;
    }

    if(Object.is(a, 0) && Object.is(b, -0)){
        return true;
    }
    
    if(Object.is(a, b)){
        return true;
    } else
        return false;

}

test("Function strict equals of 1 and 1 is true", function(){
    const result = strictEquals(1,1);
    expect(result).toBe(true);
}
)

test("Function strict equals of NaN and NaN is false", function(){
    const result = strictEquals(NaN,NaN);
    expect(result).toBe(false);
}
)

test("Function strict equals of 0 and -0 is true", function(){
    const result = strictEquals(0,-0);
    expect(result).toBe(true);
}
)

test("Function strict equals of -0 and 0 is true", function(){
    const result = strictEquals(-0,0);
    expect(result).toBe(true);
}
)

test("Function strict equals of 1 and '1' is false", function(){
    const result = strictEquals(1,'1');
    expect(result).toBe(false);
}
)

test("Function strict equals of true and false is false", function(){
    const result = strictEquals(true,false);
    expect(result).toBe(false);
}
)

test("Function strict equals of false and false is true", function(){
    const result = strictEquals(false,false);
    expect(result).toBe(true);
}
)

test("Function strict equals of 'water' and 'oil'is false", function(){
    const result = strictEquals('water','oil');
    expect(result).toBe(false);
}
)

test("Function strict equals of undefined and null", function(){
    const result = strictEquals(undefined, null);
    expect(result).toBe(false);
}
)