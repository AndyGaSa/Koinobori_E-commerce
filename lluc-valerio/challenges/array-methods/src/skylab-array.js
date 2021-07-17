/*
Implementar una clase SkylabArray que simule el comportamiento de un Array.
- some
- find
- filter
- map
*/
class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue, ...moreValues) {
    this[this.length] = newValue;
    this.length += 1;
    // for (let i = 0; i < this.length - 1; i += 1) {
    //   this[this.length] = newValue;
    //   this.length += 1;
    // }
    return this.length;
  }

  pop() {
    if (this.length <= 0) {
      return 0;
    }
    delete this[this.length - 1];
    this.length -= 1;
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
