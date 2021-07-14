function strictEquals (a,b) {    

    if(isNaN(a) && isNaN(b)) return false;
    if(isNaN(a/b) || isNaN(b/a)) return true;

    let result = Object.is (a, b)
return result
}

strictEquals();

test ("A function that checks if 2 numbers are strictly equal, expects true", function(){

    expect(strictEquals(1,1)).toBe(true);
})

test ("A function that checks if a number is strictly equal to a string, expects true", function(){

    expect(strictEquals("1",1)).toBe(false);
})

test ("A function that checks if NaN is strictly equal NaN,expects false", function(){

    expect(strictEquals(NaN, NaN)).toEqual(false);
})

test ("A function that checks if 0 is strictly equal to -0,expects true", function(){

    expect(strictEquals(0, -0)).toEqual(true);
})

test ("A function that checks if -0 is strictly equal to 0,expects true", function(){

    expect(strictEquals(-0, 0)).toEqual(true);
})

test ("A function that checks if true is strictly equal to false,expects false", function(){

    expect(strictEquals(true, false)).toEqual(false);
})

test ("A function that checks if false is strictly equal to false,expects true", function(){

    expect(strictEquals(false, false)).toEqual(true);
})

test ("A function that checks if string water is strictly equal to string oil,expects false", function(){

    expect(strictEquals("water", "oil")).toEqual(false);
})