class SkylabArray {
  constructor(array) {
    this.array = array;
    let i = 0;
    while (this.array[i] !== undefined) {
      i += 1;
    }
    this.length = i;
  }

  push(value) {
    this.array[this.length] = value;
    return this.array;
  }

  some(even) {
    this.even = even;
    for (let i = 0; this.array[i] !== undefined; i += 1) {
      if (this.even(this.array[i])) {
        return true;
      }
    }
    return false;
  }

  find(found) {
    this.found = found;
    for (let i = 0; this.array[i] !== undefined; i += 1) {
      if (this.found(this.array[i])) {
        return this.array[i];
      }
    }
    return undefined;
  }

  filter(result) {
    this.result = result;
    const newArray0 = [];
    for (let i = 0; this.array[i] !== undefined; i += 1) {
      if (this.result(this.array[i])) {
        newArray0.push(this.array[i]);
      }
    }
    return newArray0;
  }

  map(multiply) {
    this.multiply = multiply;
    const newArray1 = [];
    for (let i = 0; this.array[i] !== undefined; i += 1) {
      if (this.multiply(this.array[i])) {
        newArray1.push(multiply(this.array[i]));
      }
    }
    return newArray1;
  }
}

module.exports = SkylabArray;
