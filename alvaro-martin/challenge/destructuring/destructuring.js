function abrest (){
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]
}

function asignacionBasicaDeVariables(){
    const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
}

function arregloFuncion(){
    function f() {
        return [1, 2];
      }
      
      let a, b;
      [a, b] = f();
      console.log(a); // 1
      console.log(b); // 2
}
function ignorar(){
    function f() {
        return [1, 2, 3];
      }
      
      const [a, , b] = f();
      console.log(a); // 1
      console.log(b); // 3
      
      const [c] = f();
      console.log(c); // 1
}

function rest(){
    const [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]
}

function objetos(){
    const user = {
        id: 42,
        is_verified: true
    };
    
    const {id, is_verified} = user;
    
    console.log(id); // 42
    console.log(is_verified); // true
}

function nuevosNombres(){
    const o = {p: 42, q: true};
const {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
}

function doe(){ //Desempacar campos de objetos pasados como parámetro de función

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
}
function forof(){
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

}
function combinada(){
    const props = [
        { id: 1, name: 'Fizz'},
        { id: 2, name: 'Buzz'},
        { id: 3, name: 'FizzBuzz'}
      ];
      
      const [,, { name }] = props;
      
      console.log(name); // "FizzBuzz"
}