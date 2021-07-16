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
      } else {
    const lastValue = this[this.length - 1];
    delete lastValue;
    this[this.length] -= 1;
    return this.length;
      }

  }
}

module.exports = SkylabArray;
