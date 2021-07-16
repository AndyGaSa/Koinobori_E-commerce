/*-----------> Ejemplo 1 <----------*/

/* let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50] */

/*-----------> Ejemplo 2 <----------*/
/* 
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40} */

// Como se lee la declaracion del objeto que recibe {a,b, rest}??

/*-----------> Ejemplo 3 <----------*/

/* const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three" */

// otra opción para asignar valores al ¿array?
/* 
let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2 */


// Que hermoso como se agregan las propiedades

/*-----------> Ejemplo 4 <----------*/
/* 
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); //undefined
 */

/*-----------> Ejemplo 5 <----------*/

// Otra manera de asignar variables a los valores string de un array, en el caso de faltar valores y sobrar variables estas tendrian el valor ¡undefined!

/* let a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7 */

// En este caso la reasignación del valor toma la posicion 1

/*-----------> Ejemplo 6 <----------*/

/* let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2] */

// En este ejercicios los numeros nos pueden jugar una mala pasada, recordar que los arrays siempre se inician en 0

/*-----------> Ejemplo 7 <----------*/

/* function f() {
    return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); // 1
console.log(b); // 3

const [c] = f();
console.log(c); // 1 */

// Que es lo que sucede!!! que pasa con el valor no iniciado?? lo ignora!

/*-----------> Ejemplo 8 <----------*/

/* const [a, ...b] = [1, 2, 3, 4];
console.log(a); // 1
console.log(b); // [2, 3] */

//todo ok no poner comas al final del rest ¿Como se llama?

/*-----------> Ejemplo 9 <----------*/

/* function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
        return false;
    }
    console.log(parsedURL);
    ["https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"
    ]

    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
}

console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript')); */


// "https"  Aqui un poco de explicación me estaria muy bien!! xD

/*-----------> Ejemplo 10 <----------*/

/* const user = {
    id: 42,
    is_verified: true
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true */


/*-----------> Ejemplo 11 <----------*/

/* const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true */

//very interesting

/*-----------> Ejemplo 12 <----------*/
/* 
const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

function userId({ id }) {
    return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
    return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John" */

// Esto tengo que entenderlo mejor con una relectura

/*-----------> Ejemplo 13 <----------*/

/* function drawChart({ size = 'big', coords = { x: 0, y: 0 }, radius = 25 } = {}) {
    console.log(size, coords, radius);
    // do some chart drawing
}

drawChart({
    coords: { x: 18, y: 30 },
    radius: 30
}); */


/*-----------> Ejemplo 14 <----------*/

/* const metadata = {
    title: 'Scratchpad',
    translations: [{
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
    }],
    url: '/en-US/docs/Tools/Scratchpad'
};

let {
    title: englishTitle, // rename
    translations: [{
        title: localeTitle, // rename
    }, ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung" */

/*-----------> Ejemplo 15 <----------*/

/* const people = [
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
    console.log('Name: ' + n + ', Father: ' + f);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones" */

/*-----------> Ejemplo 16 <----------*/

/* let key = 'z';
let {
    [key]: foo
} = { z: 'bar' };

console.log(foo); // "bar" */

/*-----------> Ejemplo 17 <----------*/

/* const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true" */

/*-----------> Ejemplo 18 <----------*/

const props = [
    { id: 1, name: 'Fizz' },
    { id: 2, name: 'Buzz' },
    { id: 3, name: 'FizzBuzz' }
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"


/*-----------> Ejemplo 19 <----------*/

/* let obj = { self: '123' };
obj.__proto__.prot = '456';
const { self, prot } = obj;
// self "123"
// prot "456" (Access to the prototype chain) */