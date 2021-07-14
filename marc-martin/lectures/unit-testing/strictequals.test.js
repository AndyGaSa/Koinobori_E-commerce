function strictEquals (a,b) {    

    let result = Object.is(typeof(a), typeof(b))
return result
}

strictEquals();

test ("A function that checks if 2 numbers are strictly equal, expects true", function(){

    expect(strictEquals(1,1)).toBe(true);
})

// usar toEqual para el challenge, toThrow

test ("A function that checks if a number is strictly equal to a string, expects true", function(){

    expect(strictEquals("1",1)).toBe(false);
})

test ("A function that checks if null is strictly equal to a string,expects false", function(){

    expect(strictEquals(null,"hola")).toBe(false);
})

test ("A function that checks if NaN is strictly equal NaN,expects false", function(){


    expect(strictEquals(NaN, NaN)).toEqual(false);
})
