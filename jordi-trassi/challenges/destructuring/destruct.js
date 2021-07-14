let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);


({a, b} = { a : 10, b: 20});
console.log(a);
console.log(b);


({a,b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a);
console.log(b);
console.log(rest);


const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);


const foo = ['one', 'two', 'three'];
const [red, yellow, green] = foo;
console.log(red);
console.log(yellow);
console.log(green);


let a, b;
[a, b] = [1, 2];
console.log(a);
console.log(b);


let a, b;
[a=5, b=7] = [1];
console.log(a);
console.log(b);


let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr);


function f() {
    return [1, 2];
}
let a, b;
[a, b] = f();
console.log(a);
console.log(b);


function f() {
    return [1, 2, 3];
}
const [a, , b] = f();
console.log(a);
console.log(b);
const [c] = f();
console.log(c);


const [a, ...b] = [1, 2, 3];
console.log(a);
console.log(b);




