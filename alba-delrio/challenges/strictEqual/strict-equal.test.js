function strictEqual(a,b){
    
   if(Object.is(a,NaN) && Object.is(b,NaN)){
       return false;
   }

   if(Object.is(a,0) && Object.is(b,-0)){
       return true;
   }
   if(Object.is(a,-0) && Object.is(b,0)){
    return true;
}
    
    return Object.is(a,b);
}

test ('1 is 1',()=>{
    const result=strictEqual(1,1);
    expect(result).toBe(true);
})
test ('NaN is NaN', ()=>{
    expect(strictEqual(NaN,NaN)).toBe(false);
})
test ('0 is -0', ()=>{
    expect(strictEqual(0,-0)).toBe(true);
})

test ('-0 is 0', ()=>{
    expect(strictEqual(-0,0)).toBe(true);
})
test ('1 is "1"', ()=>{
    expect(strictEqual(1,1)).toBe(true);
})

test ('true is false', ()=>{
    expect(strictEqual(true,false)).toBe(false);
})
test ('false is false', ()=>{
    expect(strictEqual(false,false)).toBe(true);
})

test ('"water" is "oil"', ()=>{
    expect(strictEqual('water','oil')).toBe(false);
})
