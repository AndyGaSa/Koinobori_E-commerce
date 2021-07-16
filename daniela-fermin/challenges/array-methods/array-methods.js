class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(...args) {
    for (let value = 0; value < arguments.length; value += 1) {
      this[this.length] = args[value];
      this.length += 1;
    }

    return this.length;
  }

  pop() {
    if (this.length !== 0) { delete this[this.length - 1]; }
    this.length -= 1;
    return this.length;
  }
}

module.exports = SkylabArray;
