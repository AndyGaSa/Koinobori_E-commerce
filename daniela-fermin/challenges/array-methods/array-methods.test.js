class SkylabArray {
  constructor() {
    this.myLength = 0;
  }

  /*  length(object) {
    this.myLength = 0;
    for (const property in object) { myLength += 1; }
    return myLength;
  }
*/
  push(newItem) {
    this[this.myLength] = newItem;
    myLength += 1;
    this.myLength;
  }

  pop() {
    if (this.myLength !== 0) { delete this[this.myLength - 1]; }
    this.myLength -= 1;
    this.myLength;
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
      if (callback(this[property]) === true) {
        return this[property];
      }
    } return undefined;
  }
}
