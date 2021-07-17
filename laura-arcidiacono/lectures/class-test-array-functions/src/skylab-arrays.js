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
    this[this.length] -= 1;
    return lastValue;
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

module.exports = SkylabArray;
