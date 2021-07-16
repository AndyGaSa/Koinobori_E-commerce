class SkaylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
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
}

const myArray = new SkaylabArray();

myArray.push('luc');
myArray.push('jordi');
myArray.push('eddy');
console.log(myArray);

console.log(myArray.pop());

module.exports = SkaylabArray;
