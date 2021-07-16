class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push() {
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
}

module.exports = SkylabArray;

const students = ['Lola', 'Laura', 'Xavi'];

students.push('Adrian');
console.log(students);
const lastValue = students.pop();
console.log(lastValue);
console.log(students);
