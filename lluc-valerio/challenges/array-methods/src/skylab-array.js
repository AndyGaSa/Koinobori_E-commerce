class SkylabArray {
  constructor() {
    this.length = 0;
  }

  push(newValue, ...moreValues) {
    this[this.length] = newValue;
    this.length += 1;
    for (let i = 0; i < moreValues.length; i += 1) {
      this[this.length] = moreValues[i];
      this.length += 1;
    }
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

    for (let i = 0; i < this.length; i += 1) {
      const newValue = callback(this[i]);
      newArray.push(newValue);
    }

    return newArray;
  }

  some(callBack) {
    if (arguments.length <= 0) {
      throw new TypeError();
    } else {
      let newValue = false;
      for (let i = 0; i < this.length; i += 1) {
        if (callBack(this[i])) {
          newValue = true;
          break;
        }
      }
      return newValue;
    }
  }

  find(callBack) {
    let newValue;
    for (let i = 0; i < this.length; i += 1) {
      if (callBack(this[i])) {
        newValue = this[i];
        break;
      }
    }
    return newValue;
  }

  filter(callBack) {
    const newArray = new SkylabArray();
    for (let i = 0; i < this.length; i += 1) {
      if (callBack(this[i])) {
        newArray.push(this[i]);
      }
    }
    return newArray;
  }

  shift() {
    let elementShifted;
    // let elementShifted1;

    if (this.length <= 0) {
      return elementShifted;
      // return elementShifted1;
    }
    elementShifted = this[0];
    //
    // [elementShifted] = this;
    // const [elementShifted] = this;
    //
    // ({ elementShifted } = this);
    // const { elementShifted } = this;
    //
    if (this.length === 1) {
      this.pop();
    }
    for (let i = 0; i < this.length - 1; i += 1) {
      this[i] = this[i + 1];
    }
    this.pop();
    return elementShifted;
  }

  unshift(newValue, ...moreValues) {
    const tempArray = new SkylabArray();
    if (arguments.length <= 0) {
      console.log('no arguments');
      return this.length;
    }
    for (let i = 0; i < this.length; i += 1) {
      tempArray[i] = this[i];
      tempArray.length += 1;
    }
    while (this.length > 0) {
      this.pop();
    }
    this.push(newValue);
    for (let i = 0; i < moreValues.length; i += 1) {
      this.push(moreValues[i]);
    }
    for (let i = 0; i < tempArray.length; i += 1) {
      this.push(tempArray[i]);
    }
    return this.length;
  }
}
module.exports = SkylabArray;
