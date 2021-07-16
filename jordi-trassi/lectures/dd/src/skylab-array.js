class SkaylabArray {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let index = 0; index < arguments.length; index += 1) {
      const elements = arguments[index];
      this[this.length] = arguments[index];
      this.length += 1;
    }

    return this.length;
  }

  pop() {
    const x = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return x;
  }

  map(callback) {
    const newArray = SkaylabArray;
    for (let index = 0; index < this.length - 1; index += 1) {
      const newValue = callback(this[index]);
      newArray.push(newValue);
    }
    return newArray;
  }

  filter(callback) {
    const newArray = new SkaylabArray();
    for (let x = 0; x < this.length; x += 1) {
      if (callback(this[x])) {
        newArray.push(this[x]);
      }
    }
    return newArray;
  }
}

const myArray = new SkaylabArray();

myArray.push('luc');
myArray.push('jordi');
myArray.push('eddy');
console.log(myArray);

let x;
myArray.filter(myArray[x] !== Number);

// console.log(myArray.pop());

module.exports = SkaylabArray;
