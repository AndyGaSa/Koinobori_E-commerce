let a,b,rest
[a,b] = [10,20]
console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);

let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);
[a,b, ...rest] = [10,20,30,40];
console.log(a);
console.log(b);
console.log(rest);

({a,b} = {a:10, b:20})
console.log(a);
console.log(b);

({a,b, ...rest} = {a:10, b:20, c:30, d:40})
console.log(a);
console.log(b);
console.log(rest);