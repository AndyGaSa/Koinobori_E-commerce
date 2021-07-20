class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(value) {
    this[this.length] = value;
    this.length += 1;
    return this.length;
  }

  pop() {
    const aux = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return aux;
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
    let aux;
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        return true;
      }
      return false;
    }
  }
}

module.exports = SkylabArray;
