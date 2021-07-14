// test ("Sum 2 and 3 is 5", function () {
//     expect(2+3).toBe(5);
// });

// test ("Sum 2 and 2 is 4", function () {
//     expect(2+2).toBe(4);
// });

// test ("Sum 2 and 7 is 9", function () {
//     expect(2+7).toBe(9);
// });

/* ***************************************************
   ****************************************************
   **************************************************** */
const sum = function (a,b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('error');
        //  console.log('putaEspaña');
    }
    return a+b;
}

test("Sum 1 and 0 is 1", function () {
    const result = sum(1,0);
    expect(result).toBe(1);
});

test("Sum of any two values that are not a number should return an error", function () {
    expect(
        function() {
            return sum(true, 'algo');
        })
        .toThrow('error');
        
});