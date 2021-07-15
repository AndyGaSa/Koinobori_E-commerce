let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]



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


// Propuesta de etapa 4 (terminada)
({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}



const x = [1, 2, 3, 4, 5];



const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2



const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"



let a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2



let a, b;

[a=5, b=7] = [1];
console.log(a); // 1
console.log(b); // 7



let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]];
console.log(arr); // [1,3,2]



function f() {
    return [1, 2];
  }
  
  let a, b;
  [a, b] = f();
  console.log(a); // 1
  console.log(b); // 2



  function f() {
    return [1, 2, 3];
  }
  
  const [a, , b] = f();
  console.log(a); // 1
  console.log(b); // 3
  
  const [c] = f();
  console.log(c); // 1



  [,,] = f();



  const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]



const [a, ...b,] = [1, 2, 3];

// SyntaxError: el elemento rest no puede tener una coma al final
// Siempre considera usar el operador rest como último elemento



function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL);
    // ["https://developer.mozilla.org/es/Web/JavaScript","https", "developer.mozilla.org", "es/Web/JavaScript"]
  
    const [, protocol, fullhost, fullpath] = parsedURL;
    return protocol;
  }
  
  console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));
  // "https"



  const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user;

console.log(id); // 42
console.log(is_verified); // true



let a, b;

({a, b} = {a: 1, b: 2});



const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true



const {a = 10, b = 5} = {a: 3};

console.log(a); // 3
console.log(b); // 5



const {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5



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
    return `${displayName} es ${name}`;
  }
  
  console.log(userId(user)); // 42
  console.log(whois(user));  // "jdoe es John"



  function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
    console.log(size, coords, radius);
    // haz un dibujo de gráfico
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
    title: englishTitle, // renombrar
    translations: [
      {
         title: localeTitle, // renombrar
      },
    ],
  } = metadata;
  
  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle);  // "JavaScript-Umgebung"



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
  
  // "Nombre: Mike Smith, Padre: Harry Smith"
  // "Nombre: Tom Jones, Padre: Richard Jones"



  let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo); // "bar"



let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }



const foo = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo;

console.log(fizzBuzz); // "true"




const props = [
    { id: 1, name: 'Fizz'},
    { id: 2, name: 'Buzz'},
    { id: 3, name: 'FizzBuzz'}
  ];
  
  const [,, { name }] = props;
  
  console.log(name); // "FizzBuzz"

  

  let obj = {self: '123'};
obj.__proto__.prot = '456';
const {self, prot} = obj;
// self "123"
// prot "456" (Acceso a la cadena de prototipos)