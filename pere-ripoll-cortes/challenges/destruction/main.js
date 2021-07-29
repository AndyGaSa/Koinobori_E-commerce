const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y);
console.log(z);

/*------------------------
--------------------------*/

class Human {
  constructor() {
    this.teeh = 32;
    this.sayHi = () => { console.log('Hi'); };
  }
}

const human = new Human(32);

console.log(human);

//-----------------------------

const a = {};
console.log(a.__proto__.__proto__);
