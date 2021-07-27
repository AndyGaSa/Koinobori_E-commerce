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
    const value = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return value;
  }

  map(callback) {
    const newArray = new SkylabArray();

    for (let index = 0; index < this.length - 1; index += 1) {
      const element = callback(this[index]);
      newArray.push(element);
    }
    return newArray;
  }
}

const a = new SkylabArray();
a.push(77);
a.push(55, 'hola');
console.log(a);

module.exports = SkylabArray;
