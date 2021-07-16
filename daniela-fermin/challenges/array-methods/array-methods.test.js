class SkylabArray {
  constructor() {
    this.myLength = 0;
  }

  length() {
    this.myLength = 0;
    let property;
    while (this.object[property] !== undefined) { myLength += 1; }
    return this.myLength;
  }

  push(newItem) {
    this.myLength = 0;
    this[this.myLength] = newItem;
    this.myLength += 1;
    return this.myLength;
  }

  pop() {
    if (this.myLength !== 0) { delete this[this.myLength - 1]; }
    this.myLength -= 1;
    return this.myLength;
  }

  some(callback) {
    for (let property = 0; property < this.myLength; property++) {
      if (callback(this[property])) {
        return true;
      }
    } return false;
  }

  find(callback) {
    for (let property = 0; property < this.myLength; property++) {
      if (callback(this[property])) {
        return this[property];
      }
    } return undefined;
  }

  filter(callback) {
    const emptyArray = [];
    for (let property = 0; property < this.myLength; property++) {
      if (callback(this[property])) {
        emptyArray.push(this[property]);
      }
    }
  }

  map(callback) {
    const emptyArray = [];
    for (let property = 0; property < this.myLength; property++) {
      emptyArray.push(callback(this[property]));
    }
  }
}
