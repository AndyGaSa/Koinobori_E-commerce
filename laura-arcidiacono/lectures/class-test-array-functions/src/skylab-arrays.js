class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue) {
    this[this.length] = newValue;
    this.length += 1;
    return this.length;
  }

  pop() {
      if (this.length === 0) {
          return 'Error';
      } else {
    const lastValue = this[this.length - 1];
    delete lastValue;
    this[this.length] -= 1;
    return this.length;
      }
  }

  map(callback) {
      let newArray = SkylabArray();
      for(let index = 0; index < this.length -1; index += 1) {
          const element = callback(this[index]);
          newArray.push(element);
      }
      return newArray;
  }
}
/*starting my methods*/
module.exports = SkylabArray;
