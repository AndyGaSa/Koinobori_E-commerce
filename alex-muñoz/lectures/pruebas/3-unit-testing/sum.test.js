const { expect, test } = require("@jest/globals")

const sum = function (a,b) {
    if(typeof a !== 'number' || typeof b !=='number'){
        throw new Error('Params should be number')
    }
    return a+b;
}

test('Sum 2 and 2 is 4', function(){/*El primer argumento dscribe el test*/ /*El segundo argumento es la funcion pra realizar los test*/
    expect(2+2).toBe(4)
    }
)

test('Sum 0 and 1 is 1', function(){
    const result = sum(2,2)
    expect(result).toBe(4)
    }
)
test('Sum of any two value there are not a number should return an error',function(){
    expect(
        ()=>sum(true, 'algo')
        ).toThrowError();
    }
)

test()