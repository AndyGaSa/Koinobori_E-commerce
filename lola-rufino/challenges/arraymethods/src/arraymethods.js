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
}

module.exports = SkylabArray;

const students = ['Lola', 'Laura', 'Xavi'];

students.push('Adrian');
console.log(students);
const lastValue = students.pop();
console.log(lastValue);
console.log(students);
