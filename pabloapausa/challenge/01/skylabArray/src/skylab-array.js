class SkylabArray {
  constructor(oldArray) {
    this.oldArray = oldArray;
    let i = 0;
    while (this.oldArray[i] !== undefined) {
      i += 1;
    }
    this.length = i;
  }

  push(value) {
    this.oldArray[this.length] = value;
    return this.oldArray;
  }

  some(even) {
    this.even = even;
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (this.even(this.oldArray[i])) {
        return true;
      }
    }
    return false;
  }

  find(found) {
    this.found = found;
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (this.found(this.oldArray[i])) {
        return this.oldArray[i];
      }
    }
    return undefined;
  }

  filter(result) {
    this.result = result;
    const newArray0 = [];
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (this.result(this.oldArray[i])) {
        newArray0.push(this.oldArray[i]);
      }
    }
    return newArray0;
  }

  map(multiply) {
    this.multiply = multiply;
    const newArray1 = [];
    for (let i = 0; this.oldArray[i] !== undefined; i += 1) {
      if (this.multiply(this.oldArray[i])) {
        newArray1.push(multiply(this.oldArray[i]));
      }
    }
    return newArray1;
  }
}

module.exports = SkylabArray;
