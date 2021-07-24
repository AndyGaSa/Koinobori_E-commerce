class SkylabArray {
  constructor() {
    this.long = 0;
  }

  push(...rest) {
    const arr = [...rest];
    arr.forEach((element) => {
      this[this.long] = element;
      this.long += 1;
    });
    return arr;
  }

  pop() {
    if (this.long === 0) {
      return 'Error';
    }
    delete this[this.long - 1];
    this.long -= 1;
    return this.long;
  }

  some(el) {
    let value = false;
    for (let i = 0; i < this.long; i += 1) {
      if (this[i] === el) {
        value = true;
      }
    }
    return value;
  }

  find(callback) {
    for (let i = 0; i < this.long; i += 1) {
      if (callback(this[i])) {
        return this[i];
      }
    }
    return undefined;
  }

  map(callback) {
    const obj = {};
    for (let i = 0; i < this.long; i += 1) {
      obj[i] = callback(this[i]);
    }
    return obj;
  }
}

const arr = new SkylabArray();
arr.push(1, 2, 3, 4, 'pere');
