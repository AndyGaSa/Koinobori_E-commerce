////////DESTRUCTURING ASSIGNMENT////////

/*This syntax makes possible to unpack values from arrays or properties from objectos into distict variables*/

//Example
let a, b, rest;
[a, b] = [10, 20]; //a=10 b=20

console.log(a); //expected output: 10
console.log(b); //expected output: 20;

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest); //expected output: [30, 40, 50]



//DESCRIPTION//

/*The destructing assignment uses similar syntax as an array literal expression,
but on the left-hand side of the assignment to define what values to UNPACK from the sourced variable*/

const x = [1, 2, 3, 4, 5];
const [y, z] = x; //y=1 z=2
/*This code is equivalent to*/
const y = x[0];
const z = x[1];



//////EXAMPLES//////

////ARRAY DESTRUCTURING////

//BASIC VARIABLE ASSIGNMENT

/*Variable assignment in array destructuring is determined by the postion in which you put the variables*/
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo; //red='one' yellow='two' green='three'
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


//ASSIGNMET SEPARATE FROM DECLARATION
let a, b; //Declaration

[a, b] = [1, 2]; //Assignment
console.log(a); //1
console.log(b); //2

/*In an array destructuring from an array of lenght N (specified) on the right-hand side of the assignment,
if the number of variables specified on the left-hand side of th assignment is GREATER than N,
only the first N variables are assigned values. The values of the remaining variables will be undefined.*/
const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo; //green and blue will be undefined because there are not enought elements in foo
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue);  //undefined


//DEFAULT VALUES

/*A variable can be assigned a default in case that the unpacked value from the array is UNDEFINED.*/
let a, b;

[a=5, b=7] = [1]; //default values a=5 b=7
console.log(a); // 1
console.log(b); // 7 //b is assigned undefined so it takes the default value 7


//SWAPPING VARIABLES

/*Two variables can be swapped in 1 expression*/
let a = 1;
let b = 3;

[a, b] = [b, a]; //a b variables are swapped
console.log(a); // 3
console.log(b); // 1

const arr = [1,2,3];
[arr[2], arr[1]] = [arr[1], arr[2]]; //arr[2] arr[1] values are swapped
console.log(arr); // [1,3,2]


//PARSING AN ARRAY RETURNED FROM A FUNCTION

/*Destructuring can make working with an array return value from a function more concise*/
function f() {
    return [1, 2];
}
/*In this example f() returns the values [1, 2]*/
let a, b;
[a, b] = f(); //this return value can be parsed in a sigle line with destructuring
console.log(a); // 1
console.log(b); // 2


//IGNORING SOME RETURNED VALUES

/*You can ignore return values that you're not interested in:*/
function f() {
    return [1, 2, 3];
}
  
const [a, , b] = f(); //Ignore the 2 element of the array returned
console.log(a); // 1
console.log(b); // 3

const [c] = f(); //Ignore of the elements minus the first one
console.log(c); // 1

[,,] = f(); //Ignore all returned values


//ASSIGNING THE REST OF AN ARRAY TO A VARIABLE

/*When destructuring an array you can unpack and assing the REMAINING PART of it to a variable
using th REST PATTERN ... */
const [a, ...b] = [1, 2, 3]; //Assign the rest of the value to the variable b using ...b
console.log(a); // 1
console.log(b); // [2, 3]

/*Be aware of not trailing it with a comma (SyntaxError)*/
const [a, ...b,] = [1, 2, 3]; //SyntaxError


//UNPACKING VALUES FROM A REGULAR EXPRESSION MATCH

/*When the regular expression exec() method finds a match it returns an array.
This array contains first the entire matched portion of the string and then the portions of the string that matched each parenthesized group in the reguar expression.
Destructing assignment allows you to unpack parts of this array when the full match its not needed*/
function parseProtocol(url) {
    const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url); //gets an array with the url divided following the regular expression
    if (!parsedURL) {
      return false;
    }
    console.log(parsedURL); // ["https://developer.mozilla.org/en-US/docs/Web/JavaScript", "https", "developer.mozilla.org", "en-US/docs/Web/JavaScript"]
  
    const [, protocol, fullhost, fullpath] = parsedURL; //Dismisses the first array element and saves into variables the rest
    return protocol; //returns protocol variable (second element of the parsedURL array)
}
  
console.log(parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript')); // "https"




////OBJECT DESTRUCTURING////

//BASIC ASSIGNMENT

/*Assignment in object destructuring is determined by de VARIABLE NAME not its position*/
const user = {
    id: 42,
    is_verified: true
};

const {id, is_verified} = user; //id will get user id value (42) - is_verified will get user is_verified value (true)
console.log(id); // 42
console.log(is_verified); // true


//ASSIGNMENT WITHOUT DECLARATION

/*A variable can be assigned its value with destructuring separate from its declaration*/
let a, b; //declaration

({a, b} = {a: 1, b: 2}); //Assignment
//Note
/*The parentheses (     ); (need to be precede by ;) around the assignment statement are required when using OBJECT LITERAL destructuring assignment withou a declaration
{a, b} = {a: 1, b: 2} is not valid stand-alone syntax, as the {a, b} on the left-hand side is considered a block and not an object literal.

However, ({a, b} = {a: 1, b: 2}); is valid, as is const {a, b} = {a: 1, b: 2}; */


//ASSIGNING TO NEW VARIABLE NAMES

/*A property can be unpacked from an object and assned to a variable with a DIFFERENT name than the object property*/
const o = {p: 42, q: true};
const {p: foo, q: bar} = o; //p property name that you want to get / foo variable name*/

console.log(foo); // 42
console.log(bar); // true


//DEFAULT VALUES

/*A variable can be assigned a default, in case the value unpacked from the object is UNDEFINED*/
const {a = 10, b = 5} = {a: 3}; //a default value = 10 but is assigned 3 - b default value 5

console.log(a); // 3
console.log(b); // 5


//ASSIGNING TO NEW VARIABLES NAMES AND PROVIDING DEFAULT VALUES

/*A property can be unpacked from an object and assigned to a variable with different name
and assigned a default value in case the unpacked value is undefined*/

const {a: aa = 10, b: bb = 5} = {a: 3}; //a case: variable name aa, default value 10, unpacks value in a

console.log(aa); // 3
console.log(bb); // 5


//UNPACKING FIELDS FROM OBJECTS PASSED AS A FUNCTION PARAMETER

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
      firstName: 'John',
      lastName: 'Doe'
    }
};

function userId({id}) { //when user is passed by parameter it gets id using {id} (DESTRUCTURING ASSIGNMENT) and returns it
return id;
}

function whois({displayName, fullName: {firstName: name}}) { //gets displayName and fullName.firstName and puts it in a variable name and returns both
return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user));  // "jdoe is John"


//SETTING A FUNCTION PARAMETER'S DEFAULT VALUE

function drawChart({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) { //with '=' a default value can be assigned
    console.log(size, coords, radius);
    // do some chart drawing
}

drawChart({
    coords: {x: 18, y: 30},
    radius: 30
});  //it will take size default value cause its not defined when calling the function
//Note
/*In the parameters for drawChart, the destructured left-hand side is assigned to an empty object literal to the right-hand side:
{size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}

The function could have also be written without the right-hand side assignment. However,
if there is no right-hand side assignment, the function will look for at lest ONE argument to be supplied when invoked (TypeError if not),
whereas in its current form you can call drawChart() without supplying any parameters.

The current design is useful if you want to be able to call the function without supplying any parameters.
The other can be useful when you want to ensure an object is passed to the function.*/



