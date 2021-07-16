class SkylabArray {
  constructor(skylabArray) {
    this.skylabArray = skylabArray;
    this.skyLength = this.skylabLength();
  }

  skylabLength() {
    this.skyLength = 0;
    for (const elem of this.skylabArray) {
      this.skyLength += 1;
      this[this.skyLength] = elem;
    }
    return this.skyLength;
  }

  skylabPush(newElement) {
    this[this.skyLength] = newElement;
    this.skyLength += 1;
  }

  skylabSome(callback) {
    for (let i = 0; i < this.skyLength; i += 1) {
      if (callback(this[i])) return true;
    }
    return false;
  }

  skyPop() {
    if (this.length === 0) return undefined;
    const aux = this[this.skyLength - 1];
    delete this[this.skyLength - 1];
    this.skyLength -= 1;
    return aux;
  }
}
