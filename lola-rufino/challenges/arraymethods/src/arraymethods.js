class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return 'Error';
    }
    const lastValue = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return lastValue;
  }

  map(callback) {
    const newArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      const newValue = callback(this[i]);
      newArray.push(newValue);
    }
    return newArray;
  }

  some(callback) {
    const myArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        return true;
      }
      return false;
    }
  }

  find(callback) {
    const myArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        return this[i];
      }
    }
  }

  filter(callback) {
    const myArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        const newValue = this[i];
        const newArray = [];
        newArray.push(newValue);
        return newArray;
      }
    }
  }

  reduce() {
    const myArray = new SkylabArray();
    let accumulator = 0;
    for (let i = 0; i < this.length; i += 1) {
      accumulator += this[i];
    }
    return accumulator;
  }

  every(callback) {
    const myArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (!(callback(this[i]))) {
        return false;
      }
    }
    return true;
  }
}

module.exports = SkylabArray;

const students = new SkylabArray();

students.push(1);
students.push(30);
students.push(39);
console.log(students.every((element) => element < 40));
