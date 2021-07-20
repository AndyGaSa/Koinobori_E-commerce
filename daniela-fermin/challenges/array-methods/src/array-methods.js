class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push() {
    for (let value = 0; value < arguments.length; value += 1) {
      this[this.length] = arguments[value];
      this.length += 1;
    }

    return this.length;
  }

  pop() {
    if (this.length !== 0) { delete this[this.length - 1]; }
    this.length -= 1;
    return this.length;
  }

  some(callback) {
    for (let property = 0; property < this.length; property += 1) {
      if (callback(this[property])) return true;
    } return false;
  }

  find(callback) {
    for (let property = 0; property < this.length; property += 1) {
      if (callback(this[property])) return this[property];
    } return undefined;
  }

  filter(callback) {
    const newElement = new SkylabArray();
    for (let property = 0; property < this.length; property += 1) {
      if (callback(this[property])) {
        newElement.push(this[property]);
      }
    } return newElement;
  }

  map(callback) {
    const newElement = new SkylabArray();
    for (let property = 0; property < this.length; property += 1) {
      if (callback(this[property])) {
        newElement.push(callback(this[property]));
      }
    } return newElement;
  }
}

module.exports = SkylabArray;
