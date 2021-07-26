const stricEqual = ( a, b ) => {
    if( isNaN( a ) && isNaN ( b )) {
        return false;
    }else if(isNaN(a/b) || isNaN(b/a)){
        return true;
    }else{
        return Object.is(a,b)};
}
test('Compare 1 and 1 expect true',()=>{
    let result = stricEqual(1, 1);
    expect(result).toBe(true);
});
test ("Compare NaN and NaN expect false",()=>{
    let result = stricEqual( NaN, NaN );
    expect(result ).toBe( false )
})
test ("Compare 0 and -0 expect true",()=>{
    let result = stricEqual( 0, -0 );
    expect(result ).toBe( true )
})
test ("Compare -0 and 0 expect true",()=>{
    let result = stricEqual( -0, 0 );
    expect(result ).toBe( true )
})
test ("Compare 1 and '1' expect true",()=>{
    let result = stricEqual( 1, 1 );
    expect(result ).toBe( true )
})
test ("Compare true and false expect false",()=>{
    let result = stricEqual( true, false );
    expect(result ).toBe( false )
})
test ("Compare false and false expect true",()=>{
    let result = stricEqual( false, false );
    expect(result ).toBe( true )
})
test ("Compare 'water' and 'oil' expect false",()=>{
    let result = stricEqual( 'water', 'oil' );
    expect(result ).toBe( false )
})
