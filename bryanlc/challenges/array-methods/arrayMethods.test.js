class SkylabArray {
  constructor() {
    this.length = 0;
  }
  /* constructor(array) {
    this.arr = array;
  }

  length() {
    let nums = 0;
    for (const num in this.arr) {
      this.arr[num];
      nums += 1;
    }

    console.log(nums);
  }

  push(numero) {
    for (const num in this.arr) {
      this.arr.length += numero;
    }

    console.log(this.arr);
  }

  */
}
/*
const skylab = new SkylabArray([2, 3]);

skylab.length();
const num = 4;
skylab.push(num); */

// const SkylabArray = require('./arrayMethods.test.jest'); esto en el fichero de test
// module.exports = skylabArray; esto en el fichero donde esta la clase

test('should have a ength equals yo 0', () => {
  const myArray = new SkylabArray();
  expect(myArray.length).toBe(0); // tobe es un comparador
});
