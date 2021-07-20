class SkylabArray {
  constructor(skylabArray) {
    this.skylabArray = skylabArray;
    this.counter = 0;
  }

  skylabLength() {
    for (const counter of this.skylabArray) {
      this.counter++;
    }
    return this.counter;
  }
}
const testArray = [54, 25, 36, 45, 'dfdf'];
const skylab = new SkylabArray(testArray);
skylab.skylabLength();
