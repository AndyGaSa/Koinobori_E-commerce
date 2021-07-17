/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push() {
    // arguments devuelve un objeto con dos atributo con sus valoires correspondientes.
    for (let value = 0; value < arguments.length; value += 1) {
      // eslint-disable-next-line prefer-rest-params
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

  // eslint-disable-next-line consistent-return
  some(callback) {
    for (let iteration = 0; iteration < this.length; iteration += 1) {
      if (callback(this[iteration])) {
        return true;
      }
      return false;
    }
  }

  // eslint-disable-next-line consistent-return
  find(callback) {
    for (let i = 0; i < this.length; i += 1) {
      if (callback(this[i])) {
        return this[i];
      }
      return false;
    }
  }
}
module.exports = SkylabArray;
