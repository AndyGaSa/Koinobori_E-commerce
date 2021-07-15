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


function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
console.log(parsedURL);
const [, protocol, fullhost, fullpath] = parsedURL;
return protocol;
}
console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));


// DESESTRUCTURACIÓN DE OBJETOS ----------


const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;
console.log(id);
console.log(is_verified);


let a, b;
({a, b} = {a: 1, b: 2});


const o = {p: 42, q: true};
const {p: foo, q: bar} = o;
console.log(foo);
console.log(bar);


const {a = 10, b = 5} = {a: 3};
console.log(a);
console.log(b); 


const {a: aa = 10, b: bb = 5} = {a: 3};
console.log(aa); 
console.log(bb);


const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
  };
  function userId({id}) {
    return id;
  }
  function whois({displayName, fullName: {firstName: name}}) {
    return `${displayName} is ${name}`;
  }
  console.log(userId(user));
  console.log(whois(user)); 



  function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
  }
  drawChart({
    coords: {x: 18, y: 30},
    radius: 30
  });




  const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2020-08-29T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/es/docs/Tools/Scratchpad'
  };
  
  let {
    title: englishTitle, 
    translations: [
      {
         title: localeTitle, 
      },
    ],
  } = metadata;
  
  console.log(englishTitle); 
  console.log(localeTitle); 




  const people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  for (const {name: n, family: {father: f}} of people) {
    console.log('Nombre: ' + n + ', Padre: ' + f);
  }


let key = 'z';
let {[key]: foo} = {z: 'bar'};     
console.log(foo);


let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; 
b; 
rest;


const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;
console.log(fizzBuzz);

const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  const [,, { name }] = props;
  console.log(name); 



let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;




