class SkylabArray {
  constructor(skylabArray) {
    this.skylabArray = skylabArray;
    this.skyLength = 0;
  }

  skylabLength() {
    for (const elem of this.skylabArray) {
      this.skyLength += 1;
    }
    return this.skyLength;
  }
}

a = new SkylabArray([1, 2, 3]);
a.skylabLength();
console.log(a.skyLength);
