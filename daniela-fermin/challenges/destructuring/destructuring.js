function ass1 () {
    let a,b,rest;
    [a,b] = [10,20]
    console.log(a);
    console.log(b);
    [a, b, ...rest] = [10, 20, 30, 40, 50];
    console.log(rest);
}

function ass2 () { 
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
}

function ass3 (){
    const x = [1, 2, 3, 4, 5];
    const [y,z] = x
    console.log(y);
    console.log(z);
}

function ass4 () {
    const foo = ['one', 'two', 'three'];
    const [red, blue, green] = foo;
    console.log(red);
    console.log(blue);
    console.log(green);
}

function ass5 () {
    const foo = ['one', 'two'];
    const [red, blue, green, yellow] = foo;
    console.log(red);
    console.log(blue);
    console.log(green);
    console.log(yellow);
}

function ass6 () {
    let a, b;
    [a=5, b=7] = [1];
    console.log(a); 
    console.log(b);
}

function ass7 () {
    let a = 1;
    let b = 3;
    [a, b] = [b, a];
    console.log(a);
    console.log(b);
    let arr = [1,2,3]
    [arr[1],arr[2]] = [arr[2],arr[1]]
    console.log(arr)
}

function arr8 (){ 
    function f() {
    return [1, 2];
  }
    let a, b;
    [a, b] = f();
    console.log(a);
    console.log(b);
}

function ass9 () {function f() {
    return [1, 2, 3];
  }

    const [a, , b] = f();
    console.log(a); 
    console.log(b); 
    
    const [c] = f();
    console.log(c); //Pregunta, c queda como un nuevo array que contiene solo a c?

}


function ass10 () {
    const [a, ...b] = [1, 2, 3];
    console.log(a); 
    console.log(b); 
}

function ass11 () {
    function parseProtocol(url) {
        const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url); //como funciona esto exactamente
        if (!parsedURL) {
          return false;
        }
        console.log(parsedURL);
       
            ["https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
      
        const [, protocol, fullhost, fullpath] = parsedURL; // por que aqui hay una coma antes de?
        return protocol;
      }
      
      console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript'));
      // "https"
}

function ass12 () {
    const user = {
        id: 42,
        is_verified: true
    };
    const {id, is_verified} = user;
    console.log(id);
    console.log(is_verified);
}

function ass13 () {
    let a,b;
    ({a, b} = {a: 1, b: 2}) is valid, as is const {a, b} = {a: 1, b: 2}
}

function ass14 () {const o = {p: 42, q: true};
const {p: foo, q: bar} = o; //preguntar logica
}

function ass15 () {
    const {a = 10, b = 5} = {a: 3};

    console.log(a); // 3
    console.log(b);
}

function ass16 () {
    const {a: aa = 10, b: bb = 5} = {a: 3};
    console.log(aa); // Preguntar
    console.log(bb); 
    
}

function ass17 () {
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
}

function ass18 () {
    function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) {
        console.log(size, coords, radius);
        // do some chart drawing
      } //Preguntar
      
      drawChart({
        coords: {x: 18, y: 30},
        radius: 30
      }); //You could have also written the function without the right-hand side assignment. However, if you leave out the right-hand side assignment, the function will look for at least one argument to be supplied
}

function ass19 () {
    const metadata = {
        title: 'Scratchpad',
        translations: [
          {
            locale: 'de',
            localization_tags: [],
            last_edit: '2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
          }
        ],
        url: '/en-US/docs/Tools/Scratchpad'
      };
      
      let {
        title: englishTitle, // rename
        translations: [
          {
             title: localeTitle, // rename
          },
        ],
      } = metadata;
      
      console.log(englishTitle); // "Scratchpad"
      console.log(localeTitle); 
}

function ass20 () {
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
        console.log('Name: ' + n + ', Father: ' + f);
      }//preguntar 


      let key = 'z';
let {[key]: foo} = {z: 'bar'};

console.log(foo);
}

let {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
a; // 10
b; // 20
rest; // { c: 30, d: 40 }

//Invalid JavaScript identifier as a property name what does this mean
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
// self "123" NI IDEA!!
// prot "456" (Access to the prototype chain)

