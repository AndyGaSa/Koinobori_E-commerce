/* eslint-disable prefer-rest-params */
class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push() {
    for (let index = 0; index < arguments.length; index += 1) {
      this[this.length] = arguments[index];
      this.length += 1;
    }

    return this.length;
  }

  map(callback) {
    const newArray = new SkylabArray();

    for (let index = 0; index < this.length; index += 1) {
      const newValue = callback(this[index]);
      newArray.push(newValue);
    }

    return newArray;
  }
}

module.exports = SkylabArray;
