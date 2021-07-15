let a = null;
let b = null;
const strictEquality = function(x, y) {
    if (Object.is(x, NaN) || Object.is(y, NaN) || (Object.is(x, 0) && Object.is(y, -0)) || Object.is(x, -0) && Object.is(y, 0)) {
        return x == y;
    }
    return Object.is(x, y)
};