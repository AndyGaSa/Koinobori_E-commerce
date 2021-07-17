//PRACTICA DESTRUCTURING//
/**para ejecutar consola en  vscode abrimos carpeta a la que queremos ejecutar cd "nombre carpeta" --->node "nombre del archivo*/

//-----DESESTRUCTURACION ARRAYS----

//--ASIGNACION BASICA--

// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

//--ASIGNACION SEPARADA--

// let a, b;

// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2

//--VALORES PREDETERMINADOS--

// let a, b;

// [a=5, b=7] = [1];
// console.log(a); // 1
// console.log(b); // 7

//--INTERCAMBIO DE VARIABLES--

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1,2,3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]

//--ANALIZAR UN ARRAY DEVUELTO POR UNA FUNCION--

// function f() {
//     return [1, 2];
//   }
  
//   let a, b;
//   [a, b] = f();
//   console.log(a); // 1
//   console.log(b); // 2

//--IGNORAR VALORES DEVUELTOS--

// function f() {
//     return [1, 2, 3];
//   }
  
//   const [a, , b] = f();
//   console.log(a); // 1
//   console.log(b); // 3
  
//   const [c] = f();
//   console.log(c); // 1

//---ASIGNAR EL RESTO DE UN ARRAY A UNA VAR--

//!!!OJO CASO ... QUE DIJO GILBE!!!

// const [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]

//--DESEMPACAR VALORES COINCIDENTES CON UNA EXPRESION REGULAR --
//!!!CASO RARO QUE PASA AQUI??!!!
// function parseProtocol(url) {
//     const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
//     if (!parsedURL) {
//       return false;
//     }
//     console.log(parsedURL);
     
  
//     const [, protocol, fullhost, fullpath] = parsedURL;
//     return protocol;
//   }
  
//   console.log(parseProtocol('https://developer.mozilla.org/es/Web/JavaScript'));
//   // "https"

//----DESTRUCTURACION DE OBJETOS----

//--ASIGNACION BASICA--

// const user = {
//     id: 42,
//     is_verified: true
// };

// const {id, is_verified} = user;

// console.log(id); // 42
// console.log(is_verified); // true

//--ASIGNACION SIN DECLARACION--

//!MAL ROLLO MEJOR DECLARAR!!

// let a, b;

// ({a, b} = {a: 1, b: 2});

//--ASIGNAR NUEVOS NOMBRES A VARIABLES--

// const o = {p: 42, q: true};
// const {p: foo, q: bar} = o;

// console.log(foo); // 42
// console.log(bar); // true

//--VALORES PREDETERMINADOS--

//const {a = 10, b = 5} = {a: 3};

//--ASIGNAR NOMBRES A NUEVAS VARIABLES Y DAR VALORES PREDETERMINADOS--

// const {a: aa = 10, b: bb = 5} = {a: 3};

// console.log(aa); 
// console.log(bb)

//--DESEMPACAR CAMPOS DE OBGETOS PASADOS COMO PARAMETRO DE FUNCION--

// const user = {
//     id: 42,
//     displayName: 'jdoe',
//     fullName: {
//       firstName: 'John',
//       lastName: 'Doe'
//     }
//   };
  
//   function userId({id}) {
//     return id;
//   }
  
//   function whois({displayName, fullName: {firstName: name}}) {
//     return `${displayName} es ${name}`;
//   }
  
//   console.log(userId(user)); // 42
//   console.log(whois(user));  // "jdoe es John"

//--ESTABLECER EL VALOR PREDETERMINADO DE UN PARAMETRO DE FUNCION--

// function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
//     console.log(size, coords, radius);
//     // haz un dibujo de gráfico
//   }
  
//   drawChart({
//     coords: {x: 18, y: 30},
//     radius: 30
//   });

//--DESESTRUCTURACION DE ARREGLOS Y OBGETOS ANIDADOS--

// const metadata = {
//     title: 'Scratchpad',
//     translations: [
//       {
//         locale: 'de',
//         localization_tags: [],
//         last_edit: '2020-08-29T08:43:37',
//         url: '/de/docs/Tools/Scratchpad',
//         title: 'JavaScript-Umgebung'
//       }
//     ],
//     url: '/es/docs/Tools/Scratchpad'
//   };
  
//   let {
//     title: englishTitle, // renombrar
//     translations: [
//       {
//          title: localeTitle, // renombrar
//       },
//     ],
//   } = metadata;
  
//   console.log(englishTitle); // "Scratchpad"
//   console.log(localeTitle);  // "JavaScript-Umgebung"

//--ITERACION "for...of" Y DESESTRUCTURACION--

// const people = [
//     {
//       name: 'Mike Smith',
//       family: {
//         mother: 'Jane Smith',
//         father: 'Harry Smith',
//         sister: 'Samantha Smith'
//       },
//       age: 35
//     },
//     {
//       name: 'Tom Jones',
//       family: {
//         mother: 'Norah Jones',
//         father: 'Richard Jones',
//         brother: 'Howard Jones'
//       },
//       age: 25
//     }
//   ];
  
//   for (const {name: n, family: {father: f}} of people) {
//     console.log('Nombre: ' + n + ', Padre: ' + f);
//   }
  
  // "Nombre: Mike Smith, Padre: Harry Smith"
  // "Nombre: Tom Jones, Padre: Richard Jones"

  //--NOMBRES DE PROPIEDADES DE OBJETOS CALCULADOS Y DESESTRUCTURACION--

//   let key = 'z';
// let {[key]: foo} = {z: 'bar'};

// console.log(foo); // "bar"

//--REST EN LA DESESTRUCTURACION DE OBGETOS--

// let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
// a; // 10
// b; // 20
// rest; // { c: 30, d: 40 }

//--IDENTIFICADOR DE JS NO VALIDO COMO NOMBRE DE LA PRODIEDAD

// const foo = { 'fizz-buzz': true };
// const { 'fizz-buzz': fizzBuzz } = foo;

// console.log(fizzBuzz); // "true"

//--DESESTRUCTURACION COMBINADA DE ARRAYS Y OBGETOS--

// const props = [
//     { id: 1, name: 'Fizz'},
//     { id: 2, name: 'Buzz'},
//     { id: 3, name: 'FizzBuzz'}
//   ];
  
//   const [,, { name }] = props;
  
//   console.log(name); // "FizzBuzz"

//--