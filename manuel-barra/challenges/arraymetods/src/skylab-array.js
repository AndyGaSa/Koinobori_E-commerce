class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(...rest) {
    const arr = [...rest];
    for (let i = 0; i < arr.length; i += 1) {
      this[this.length] = arr[i];
      this.length += 1;
    }
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

module.exports = SkylabArray;
