function strictEquals (a,b) {
    // if(
    //     (Object.is(a,b)) && 
    //     (!(Object.is(a,NaN)) || !(Object.is())
        
        
    //     ) { 
    //     return true;
    // } else {
    //     return false;
    // }
    if (Object.is(a,b)) {
        return true;
    } else {
        return false;
    }
}

test ('Compare 1 to 1 is true', function () {
    expect(strictEquals(1,1)).toBe(1===1);
});
test ('Compare NaN to Nan is false', function () {
    expect(strictEquals(NaN,NaN)).toBe(NaN===NaN);
});
test ('Compare 0 to -0 is true', function () {
    expect(strictEquals(0,-0)).toBe(0===-0);
});
test ('Compare -0 to 0 is true', function () {
    expect(strictEquals(-0,0)).toBe(-0===0);
});
test ('Compare 1 to "1" is false', function () {
    expect(strictEquals(1,"1")).toBe(1==="1");
});
test ('Compare true to false is false', function () {
    expect(strictEquals(true,false)).toBe(true===false);
});
test ('Compare false to false is true', function () {
    expect(strictEquals(false,false)).toBe(false===false);
});
test ('Compare "Water" to "Oil" is false', function () {
    expect(strictEquals("Water","Oil")).toBe("Water"==="Oil");
});
test ('Compare "SkyLab" to "SkyLab" is true', function () {
    expect(strictEquals("SkyLab","SkyLab")).toBe("SkyLab"==="SkyLab");
});