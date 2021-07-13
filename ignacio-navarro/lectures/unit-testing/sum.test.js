const { expect } = require("@jest/globals")

test ("2 plus 2 is 2", function(){
    expect(2+2).toBe(4)
})
test ("1 plus 0 is 2", function(){
    expect(1+0).toBe(1)
})